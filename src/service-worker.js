const CACHE_NAME = "imdigital-cache-v1";
const urlsToCache = [
  "/", // Página inicial
  "/index.html",
  "/global.css", // Adicione seu CSS principal
  "/build/bundle.js", // Adicione o caminho correto dos assets
  "/images/8664905_lemon_fruit_icon.png",
  "/images/8664884_hand_back_fist_icon.png"
];

// Instala o Service Worker e faz cache dos arquivos
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

  self.skipWaiting(); // Ativa o novo Service Worker imediatamente
});

// Intercepta requisições e retorna do cache se possível
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Buscando:", event.request.url);
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        console.error("[Service Worker] Falha na busca:", event.request.url);
      })
  );
});

// Atualiza o cache quando necessário
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Ativando...");

  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
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

  self.clients.claim();
});
