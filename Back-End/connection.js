// LINK FOR WEB SDK LIBRARY https://firebase.google.com/docs/database/web/start //
//
import { initializeApp } from "node_modules/firebase/app";
import { getAnalytics } from "node_modules/firebase/analytics";
import { getDatabase ,ref, child, get } from "node_modules/firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1PtVkndSIJKdH-IQiNq4JyQOg8efUpbY",
  authDomain: "quickstart-1593580211990.firebaseapp.com",
  databaseURL: "https://quickstart-1593580211990-default-rtdb.firebaseio.com",
  projectId: "quickstart-1593580211990",
  storageBucket: "quickstart-1593580211990.appspot.com",
  messagingSenderId: "1086555982045",
  appId: "1:1086555982045:web:82665a2f0b92d5bffdf334",
  measurementId: "G-3FLKRRNBHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//read database
const database = getDatabase();

//write database
const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

