const CACHE="myschedule-perfect-v2";
const ASSETS=["./","./index.html","./style.css","./script.js","./manifest.json","./icons/icon-192.svg","./icons/icon-512.svg","./icons/logo1.svg","./icons/logo2.svg","./icons/logo3.svg","./icons/logo4.svg","./icons/logo5.svg","./icons/logo6.svg","./icons/icon_01.png","./icons/icon_02.png","./icons/icon_03.png","./icons/icon_04.png","./icons/icon_05.png","./icons/icon_06.png","./icons/icon_07.png","./icons/icon_08.png","./icons/icon_09.png","./icons/icon_10.png","./icons/icon_11.png","./icons/icon_12.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(a=>a.length?a[0].focus():self.clients.openWindow("./")))});
