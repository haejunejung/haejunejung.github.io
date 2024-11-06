const CACHE_NAME = "v1.0";

// install event
self.addEventListener("install", (event) => {
  console.log("[Service Worker] installed");
  self.skipWaiting(); // 새 Service Worker 설치되면 활성화
});

// activate event
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] activate...");

  // 이전 버전의 캐시를 삭제
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            // CACHE_NAME 외의 캐시 삭제
            console.log("[Service Worker] 이전 캐시 삭제", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // 새 서비스 워커가 즉시 활성화되도록 skipWaiting() 호출 (install 단계에서 해야 합니다)
  self.clients.claim(); // 활성화되면 바로 클라이언트에게 제어권을 넘김
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
