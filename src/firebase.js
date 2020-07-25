import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBXt7gieY81a_UtVA3rxHjTIYxuvKTZjzU",
  authDomain: "pig-test-50b88.firebaseapp.com",
  databaseURL: "https://pig-test-50b88.firebaseio.com",
  projectId: "pig-test-50b88",
  storageBucket: "pig-test-50b88.appspot.com",
  messagingSenderId: "246836952284",
  appId: "1:246836952284:web:a689e1e7dc0d1f05218819",
  measurementId: "G-8F4KX3G4SL",
});
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

export default app;
