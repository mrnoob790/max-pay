self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('paymentrequest', async event => {
  event.respondWith({
    methodName: event.methodData[0].supportedMethods,
    details: {
      status: 'success',
      message: 'Payment completed with Max Pay!'
    }
  });
});