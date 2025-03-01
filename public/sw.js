// public/sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
    // A lógica do seu service worker aqui
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker Activated');
    // Ativação do service worker
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Lógica para interceptar requisições
  });
  