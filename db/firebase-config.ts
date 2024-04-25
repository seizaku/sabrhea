// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtSdRoQ_J8QciU94QFDG0L8dHF8I4TMnU",
//   authDomain: "sabrheas.firebaseapp.com",
//   projectId: "sabrheas",
//   storageBucket: "sabrheas.appspot.com",
//   messagingSenderId: "926440283766",
//   appId: "1:926440283766:web:70db95e8ea89d3f90dc957"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBcxi7ogMziXPzrg_6P6z6kh40YHyvEvjo",
  authDomain: "sabrhea-portfolio.firebaseapp.com",
  projectId: "sabrhea-portfolio",
  storageBucket: "sabrhea-portfolio.appspot.com",
  messagingSenderId: "73112950282",
  appId: "1:73112950282:web:ae4768ca1b9670a0a331f3",
  measurementId: "G-SN9P31BEHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, storage }