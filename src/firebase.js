import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2hUGa96o71bGQjQG9X3OV1DsQOzk2jEA",
  authDomain: "slack-45d94.firebaseapp.com",
  databaseURL: "https://slack-45d94.firebaseio.com",
  projectId: "slack-45d94",
  storageBucket: "slack-45d94.appspot.com",
  messagingSenderId: "1044316901336",
  appId: "1:1044316901336:web:fcdc5a88ae048f0812acad",
  measurementId: "G-3EG8SKSGGF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
