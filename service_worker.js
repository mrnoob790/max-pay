self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("message", event => {

  if(event.data === "navigate-to-extension-page") {

    event.waitUntil(

      clients.matchAll({
        type:"window"
      })

      .then(clientsList => {

        if(!clientsList.length) return;

        return clientsList[0].navigate(
          "http://localhost:8000/test"
        );

      })

    );

  }

});
