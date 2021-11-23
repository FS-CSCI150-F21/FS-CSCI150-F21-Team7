import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
//import { getFirestore } from "firebase/firestore";
export default firebaseApp.firestore()
//const db = firestore;
