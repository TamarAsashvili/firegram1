import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBi1V3LcaYSW0PTny22dQtMbsFUq29fGFo",
    authDomain: "tamar-firegram.firebaseapp.com",
    databaseURL: "https://tamar-firegram.firebaseio.com",
    projectId: "tamar-firegram",
    storageBucket: "tamar-firegram.appspot.com",
    messagingSenderId: "366563919359",
    appId: "1:366563919359:web:a66bd8c8adc5d3a2d1d3ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const projectStorage = firebase.storage();
const progectFirestore = firebase.firestore();

export { projectStorage, progectFirestore };



