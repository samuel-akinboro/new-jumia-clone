import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpj6kYpXDtISCmA1mLMV3AEdY4i4qMzJc",
  authDomain: "ecommerce-107dd.firebaseapp.com",
  projectId: "ecommerce-107dd",
  storageBucket: "ecommerce-107dd.appspot.com",
  messagingSenderId: "37270174007",
  appId: "1:37270174007:web:1ad74c6ad5d6968d10c2b2",
  measurementId: "G-MRYV32B1P0"
};

// initializing firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connect to firestore(database)
const db = firebaseApp.firestore();

// authentication
const auth = firebase.auth();

//  product photos
const photoDB = firebase.storage();


export { db, auth, photoDB };