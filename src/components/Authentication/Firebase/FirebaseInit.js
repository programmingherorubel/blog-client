import { initializeApp } from "firebase/app";
import firebaseConfig from './FirebaseConfig';

const firebaseInit = ()=>{
     initializeApp(firebaseConfig)
}

export default firebaseInit
