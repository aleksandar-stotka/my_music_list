import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDUJwiP1yuFVYZEExGe6AEYUMP_EB33SWk",
  authDomain: "musicme-d227e.firebaseapp.com",
  databaseURL: "https://musicme-d227e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "musicme-d227e",
  storageBucket: "musicme-d227e.appspot.com",
  messagingSenderId: "201613178674",
  appId: "1:201613178674:web:865030e10e6c9a7a13092b"
};
firebase.initializeApp(firebaseConfig);


///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
