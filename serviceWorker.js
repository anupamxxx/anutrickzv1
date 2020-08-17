
const staticAnutrickz = "Anutrickz-site-v1"
const assets = [
  "/",
  "https://anutrickz.blogspot.com",
  "",
  "https://raw.githubusercontent.com/anupamxxx/anutrickzv1/master/anutrickz.json",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAnutrickz).then(cache => {
      cache.addAll(assets)
    })
  )
})
