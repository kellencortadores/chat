// Service worker mínimo: permite instalar o site como app.
// Não guarda nada em cache, então o chat sempre carrega a versão atual.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
// Ao tocar no aviso de lembrete, volta para o painel
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(l => l.length ? l[0].focus() : clients.openWindow("./painel.html")));
});
