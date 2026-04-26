const CACHE_NAME = 'facewavee-cache-v1';

// 安装阶段，缓存必备的核心文件
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
                // 如果你有图标，取消下一行的注释并保证文件名对应：
                // './icon-192.png'
            ]);
        })
    );
    // 强制立即接管应用，加速应用更新
    self.skipWaiting();
});

// 拦截网络请求，优先从缓存读取，实现纯离线可用
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // 如果缓存里有，直接返回缓存；如果没有，再去发起真实请求
            return cachedResponse || fetch(event.request);
        })
    );
});
