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
  function enviar(datos) {
    datos.usuario = USUARIO;
    datos.cliente_id = clienteId();
    var cuerpo = JSON.stringify(datos);
    try {
      var blob = new Blob([cuerpo], { type: "text/plain;charset=UTF-8" });
      if (cuerpo.length < 60000 && navigator.sendBeacon && navigator.sendBeacon(URL, blob)) return;
      fetch(URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: cuerpo, keepalive: cuerpo.length < 60000 });
    } catch (e) { /* sin red: se reintenta con el siguiente avance o snapshot */ }
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
