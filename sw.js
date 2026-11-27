// Service worker mínimo: permite instalar o site como app.
// Não guarda nada em cache, então o chat sempre carrega a versão atual.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
