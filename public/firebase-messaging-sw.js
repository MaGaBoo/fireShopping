//Service worker access for Firebase messaging

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

/* importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD4w_NN9PlyMNGJSWxRvLEXhKPqt4sLPQQ",
    authDomain: "fir-shopping-d850e.firebaseapp.com",
    projectId: "fir-shopping-d850e",
    storageBucket: "fir-shopping-d850e.appspot.com",
    messagingSenderId: "941636314377",
    appId: "1:941636314377:web:2e6f89ca7f6860b1075fd8"
});
const messaging = firebase.messaging();

This code above should´t be mandatory if FCM is working and doing it automatically.

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
 */