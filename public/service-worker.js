const CACHE_NAME = "imdigital-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.js",
  "/images/8664905_lemon_fruit_icon.png",
  "/images/8664884_hand_back_fist_icon.png",
  "/offline.html"  // Página offline
];

// Evento de instalação do Service Worker
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Instalando...");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Fazendo cache dos arquivos...");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => console.error("[Service Worker] Falha ao armazenar cache", error))
  );

  self.skipWaiting(); // Força a ativação do SW sem esperar os outros clientes
});

// Evento de busca de recursos
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Buscando:", event.request.url);

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se o recurso estiver no cache, retorna ele. Caso contrário, busca na rede.
        return response || fetch(event.request)
          .catch(() => {
            // Em caso de falha na rede, retorna uma página offline
            return caches.match("/offline.html");
          });
      })
      .catch(() => {
        console.error("[Service Worker] Falha na busca:", event.request.url);
      })
  );
});

// Evento de ativação do Service Worker
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Ativando...");

  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        // Remover caches antigos que não estão na lista de cacheWhitelist
        return Promise.all(
          cacheNames.map((cache) => {
            if (!cacheWhitelist.includes(cache)) {
              console.log("[Service Worker] Removendo cache antigo:", cache);
              return caches.delete(cache);
            }
          })
        );
      })
  );

  self.clients.claim();  // Garante que o Service Worker tome controle imediatamente
});
