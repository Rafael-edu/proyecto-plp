


self.addEventListener("instal" , e =>{
    e.waitUntill(
        caches.open("static").then(cache=>{
            return cache.addAll(["/" ,"./bolo.css","./iconos/bolo.png"])

        })
    )
});

self.addEventListener("fetch" ,e=>{
    e.respondWith(
        caches.match(e.request).then(Response=>{
            return Response || fetch(e.request);
        })

    );
});