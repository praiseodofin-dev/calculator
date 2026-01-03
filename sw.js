self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("calculator-cache").then(cache
            => {
                return cache.addAll([
                    "./",
                    "./calculator.html"

                ]);
            })
    );
});