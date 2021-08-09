importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBGvWkkhckdjuStYljtM6UeyKe_TPoi7Vw",
    authDomain: "aydemir-altyapi.firebaseapp.com",
    projectId: "aydemir-altyapi",
    storageBucket: "aydemir-altyapi.appspot.com",
    messagingSenderId: "1024051983668",
    appId: "1:1024051983668:web:035e7be5b548d28de8e161",
    measurementId: "G-YTV9JDXJM1"
  });
const messaging = firebase.messaging();