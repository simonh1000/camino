importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC22dNJ3S9XB2CyJHAYIqXJPJHgLRPQ8EY",
  authDomain: "remix-staging.firebaseapp.com",
  databaseURL: "https://remix-staging.firebaseio.com",
  projectId: "remix-staging",
  storageBucket: "remix-staging.appspot.com",
  messagingSenderId: "441911525838",
  appId: "1:441911525838:web:3b1463b80504a89d0b2b9f",
  measurementId: "G-QSZTSDEK2C",
};

// Retrieve an instance of Firebase Messaging so that it can handle background messages
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/* *** N O T E ***
 * Normally, if payload has a "notification" field, then this takes precedence and this handler is NOT called!
 * Code has been added to work around this - see below
 * When "notification" not present, we get {data, from, priority}

* If we pass a notification object here, then that is what's going to be used by the firebase code,
and onBackgroundMessage will be ignored.

On the other hand, if we don't include that field, we can build our own notifications using the data object

{...,
  data: {
    rmx_body: "hello simon"
    rmx_title: "pwa_title"
    rmx_url: "http://localhost:3002/pwa/target/runtime/target"
    rmx_icon: ...
  }
}
*/
console.log("** firebase-messaging-sw 0.1.1 **");

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.onBackgroundMessage] " + self.location.href,
    payload
  );
  // Customize notification here
  const notificationTitle = payload.data.title;

  const notificationOptions = {
    body: payload.data.body,
    // icon: "https://remixlabs.com/images/remix-glyph.png",
    icon: "https://our-camino.pages.dev/imgs/conch.png",
  };

  console.log("[firebase-messaging-sw.onBackgroundMessage]", {
    notificationTitle,
    notificationOptions,
  });
  self.registration
    .showNotification(notificationTitle, notificationOptions)
    // .then(() => console.log("[firebase-messaging-sw.showNotification] confirmed"))
    .catch((err) =>
      console.error("[firebase-messaging-sw.showNotification]", err)
    );
});

/* Do something with a click
 * https://stackoverflow.com/questions/39418545/chrome-push-notification-how-to-open-url-adress-after-click
 */
// self.addEventListener("notificationclick", function (event) {
//     console.log("[firebase-messaging-sw.notificationclick]", event.notification);
//     event.notification.close();
//     // console.log("[firebase-messaging-sw.notificationclick]", event);

//     // Experiment: all the non `rmx_...` keys will be passed as params with the url opening
//     // the screen
//     let dataKeys = Object.keys(event.notification.data);
//     // console.log("[firebase-messaging-sw.js] notificationclick", dataKeys);
//     let paramsList = dataKeys.reduce((acc, key) => {
//         if (key.startsWith("rmx_")) {
//             return acc;
//         } else {
//             return [key + "=" + event.notification.data[key], ...acc];
//         }
//     }, []);
//     // console.log("[firebase-messaging-sw.js] notificationclick", paramsList);
//     const query = paramsList.length > 0 ? "?" + paramsList.join("&") : "";
//     const url = event.notification.data.rmx_url + query;
//     // console.log("[firebase-messaging-sw.js] notificationclick", url);

//     // Open the app
//     // event.waitUntil(clients.openWindow(url));
//     event.waitUntil(
//         clients.matchAll({ type: "window" }).then((windowClients) => {
//             // console.log(windowClients)
//             // Check if there is already a window/tab open with the target URL
//             for (let i = 0; i < windowClients.length; i++) {
//                 let client = windowClients[i];
//                 // If so, just focus it.
//                 if (client.url === event.notification.data.rmx_url && "focus" in client) {
//                     return client.focus();
//                 }
//             }
//             // If not, then open the target URL in a new window/tab.
//             if (clients.openWindow) {
//                 return clients.openWindow(url);
//             }
//         })
//     );
// });
