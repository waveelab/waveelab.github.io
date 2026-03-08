const CACHE_NAME = 'waveepod-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// 安装 Service Worker 并缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 拦截网络请求，优先从缓存读取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存里有，就返回缓存；否则发起网络请求
        return response || fetch(event.request);
      })
  );
});
