import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdPs5nQz2nlQw4WilkQc4amznQEIYKvpU",
    authDomain: "nextjs-c8348.firebaseapp.com",
    projectId: "nextjs-c8348",
    storageBucket: "nextjs-c8348.appspot.com",
    messagingSenderId: "383272622063",
    appId: "1:383272622063:web:0de7cc05d3cc2c2602c81a",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
