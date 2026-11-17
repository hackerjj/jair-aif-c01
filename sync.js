// Guardado automático de resultados del curso AIF-C01.
// Envía al servidor cada avance y cada módulo terminado, sin que el alumno haga nada.
(function () {
  var USUARIO = "jair";
  var PREFIX = "jair-";
  var URL = "https://trento-social-backend.onrender.com/api/aif/resultado";
  var MODULO_RE = /^(diagnostico|guia\d+|practica\d*|simulacro\d+)$/;
  function esMod(m) { return MODULO_RE.test(m); }
  var AVANCE_CADA_MS = 2 * 60 * 1000;
  var SNAPSHOT_CADA_MS = 30 * 60 * 1000;

  function clienteId() {
    var k = PREFIX + "cliente-id", v = localStorage.getItem(k);
    if (!v) { v = Date.now().toString(36) + Math.random().toString(36).slice(2, 10); origSet.call(localStorage, k, v); }
    return v;
  }
  function puntaje(st) {
    if (!st || !st.res) return null;
    var r = Object.keys(st.res).map(function (k) { return st.res[k]; }).filter(function (x) { return x && x.correcto !== undefined; });
    return { ok: r.filter(function (x) { return x.correcto; }).length, total: r.length };
  }
  function registrar(modulo, estado) {
    try {
      var k = PREFIX + "envio-log", l = JSON.parse(localStorage.getItem(k) || "[]");
      l.unshift({ t: Date.now(), m: modulo, e: estado }); origSet.call(localStorage, k, JSON.stringify(l.slice(0, 6)));
    } catch (e) { /* sin almacenamiento */ }
  }
  function enviar(datos) {
    datos.usuario = USUARIO;
    datos.cliente_id = clienteId();
    var cuerpo = JSON.stringify(datos), modulo = datos.modulo || "?";
    if (cuerpo.length >= 60000) cuerpo = JSON.stringify({ modulo: datos.modulo, evento: datos.evento, usuario: datos.usuario, cliente_id: datos.cliente_id, puntaje: datos.puntaje, total: datos.total, tiempo_seg: datos.tiempo_seg, estado: { aviso: "estado muy grande" } });
    // fetch con keepalive: si algo bloquea el envío, falla y queda registrado; sendBeacon queda de respaldo.
    try {
      fetch(URL, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: cuerpo })
        .then(function () { registrar(modulo, "enviado"); },
              function () { registrar(modulo, "bloqueado"); try { navigator.sendBeacon && navigator.sendBeacon(URL, new Blob([cuerpo], { type: "text/plain;charset=UTF-8" })); } catch (e) {} });
    } catch (e) {
      registrar(modulo, "error");
      try { navigator.sendBeacon && navigator.sendBeacon(URL, new Blob([cuerpo], { type: "text/plain;charset=UTF-8" })); } catch (e2) {}
    }
  }
  function enviarModulo(modulo, st, evento) {
    var p = puntaje(st);
    enviar({ modulo: modulo, evento: evento, estado: st,
      puntaje: p ? p.ok : null, total: p ? p.total : null,
      tiempo_seg: st && st.base ? Math.round(st.base / 1000) : null });
  }

  // Vigila lo que guardan las páginas en localStorage.
  var origSet = Storage.prototype.setItem;
  var ultimoAvance = {};
  Storage.prototype.setItem = function (k, v) {
    var antes = null;
    var modulo = (this === localStorage && typeof k === "string" && k.indexOf(PREFIX) === 0) ? k.slice(PREFIX.length) : null;
    if (modulo && esMod(modulo)) { try { antes = JSON.parse(localStorage.getItem(k) || "null"); } catch (e) {} }
    origSet.call(this, k, v);
    if (!modulo || !esMod(modulo)) return;
    var st = null; try { st = JSON.parse(v); } catch (e) { return; }
    if (!st || !st.started) return;
    if (st.done && !(antes && antes.done)) { enviarModulo(modulo, st, "terminado"); ultimoAvance[modulo] = Date.now(); return; }
    if (!st.done && Date.now() - (ultimoAvance[modulo] || 0) > AVANCE_CADA_MS) { ultimoAvance[modulo] = Date.now(); enviarModulo(modulo, st, "avance"); }
  };

  // Foto completa del avance (desde el Inicio), como respaldo por si algún envío se perdió.
  // Comprueba si el navegador puede llegar al servidor (no-cors: falla solo si algo lo bloquea).
  window.AIF_ULTIMOS = function () { try { return JSON.parse(localStorage.getItem(PREFIX + "envio-log") || "[]"); } catch (e) { return []; } };
  window.AIF_ESTADO = function (cb) {
    try { fetch(URL.replace("/resultado", "/resultados") + "?ping=1", { method: "GET", mode: "no-cors" }).then(function () { cb(true); }, function () { cb(false); }); }
    catch (e) { cb(false); }
  };
  window.AIF_SNAPSHOT = function (forzar) {
    var k = PREFIX + "ultimo-snapshot", t = +(localStorage.getItem(k) || 0);
    var estado = {}, hechos = [];
    for (var i = 0; i < localStorage.length; i++) {
      var kk = localStorage.key(i);
      if (kk.indexOf(PREFIX) !== 0 || !esMod(kk.slice(PREFIX.length))) continue;
      try { var v = JSON.parse(localStorage.getItem(kk)); estado[kk.slice(PREFIX.length)] = v; if (v && v.done) hechos.push(kk.slice(PREFIX.length)); } catch (e) {}
    }
    // Si hay un módulo terminado que todavía no se ha reportado, se manda la foto aunque no hayan pasado 30 minutos.
    var sk = PREFIX + "snap-hechos", firma = hechos.sort().join(",");
    if (firma !== (localStorage.getItem(sk) || "")) forzar = true;
    if (!forzar && Date.now() - t < SNAPSHOT_CADA_MS) return;
    if (!Object.keys(estado).length) return;
    enviar({ modulo: "snapshot", evento: "snapshot", estado: estado });
    origSet.call(localStorage, k, String(Date.now()));
    origSet.call(localStorage, sk, firma);
  };
})();
