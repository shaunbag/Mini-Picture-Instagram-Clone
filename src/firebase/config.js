  import firebase from 'firebase/app'; // import firebase -- current version no longer needs 'import * as firebase'
  import 'firebase/storage'; // firebase database import
  import 'firebase/firestore'; // firebase storage import
  import 'firebase/analytics';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDaYwa2A6YQICAJaPWWbT4xv5ngULReMas",
    authDomain: "mini-pics-app.firebaseapp.com",
    projectId: "mini-pics-app",
    storageBucket: "mini-pics-app.appspot.com",
    messagingSenderId: "170107512686",
    appId: "1:170107512686:web:a23eff7e72c11b42bbc37f",
    measurementId: "G-1CYRD7X2MK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const projectStorage = firebase.storage(); // initialising both services storage and firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; // exporting to use within react components