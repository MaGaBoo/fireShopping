// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';

const vapidKey = "BBbD2MaNLbsbjSp1SfgO7t7nvYGTm5trchGaOrsXu2jsSm5KA-KDBUhO-jBYuz7jo0R-0nZSPE13EOvkbLtknMo";

const firebaseConfig = {
  apiKey: "AIzaSyA8SeIgqAGCT-EiBg9F9QJVpYmsE0b-LNY",
  authDomain: "fir-shopping-af782.firebaseapp.com",
  projectId: "fir-shopping-af782",
  storageBucket: "fir-shopping-af782.appspot.com",
  messagingSenderId: "1059513341144",
  appId: "1:1059513341144:web:a05c71446e31ce2a99f3ad"
};

// Current token 

/* "fLk0bb_QKpjhafFCR3cuDo:APA91bHo6XUQlBpGLr25H_MuB_OOx7Zpk0-9Jq-WPW52bwFVVDEdmroYOaRzfC1cwXZOOgpCdml12JNRauFqXL5RN3_FOJJXKPN7_4Gn09uWu8kVSDbTpAVn37ZDoFlP9CWE0RIQlEKn" */

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey })
.then(currentToken => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    sendTokenToServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

const sendTokenToServer = token => {
  if (localStorage.getItem("tokenSentToServer")) return; // If the token already exists, don´t storage again
  localStorage.setItem("tokenSentToServer", "1") // TODO: Storage token on the server
};

export const db = getFirestore(); // Don´t forget to do this AFTER inicialization!