self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", event => {
  if (event.data === "GO") {
    self.clients.matchAll({
      type: "window"
    }).then(clients => {
      if (clients.length > 0) {
        clients[0].navigate("http://localhost:8000/");
      }
    });
  }
});
