// TODO: 자동화 스크립트 작성해서 자동으로 버저닝이 되게끔
const CACHE_NAME = "cache-v1.0";

// install event
self.addEventListener("install", (event) => {
  console.log("[Service Worker] installed");
  self.skipWaiting(); // 새 Service Worker 설치되면 활성화
});

// activate event
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] actived", event);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] fetched resource " + event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone()); // 새로운 응답을 캐시에 저장
            return response;
          });
        })
      );
    })
  );
});
