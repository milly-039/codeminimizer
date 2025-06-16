self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("minimizer-store").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/manifest.json",
        "/icon-192.png",
        "/icon-512.png"
      ]);
    })

//updatnjkcsd makes sense im stupid? i think?

  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
