import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDLNHM1gToLnDP_NMw8ELibPAUWzhgkTvQ",
    authDomain: "instagram-clone-react-js.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-js.firebaseio.com",
    projectId: "instagram-clone-react-js",
    storageBucket: "instagram-clone-react-js.appspot.com",
    messagingSenderId: "215950699011",
    appId: "1:215950699011:web:e902805bb4ca450e91bc36",
    measurementId: "G-WMC650S0T5"
});

// Database
const db = firebaseApp.firestore();

// authentifiquations : login logout etc...
const auth = firebase.auth();

// and this storage is where you put your pictures videos anything like that
const storage = firebase.storage();

export { db, auth, storage};