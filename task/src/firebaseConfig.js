import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzv5qo5k6Q5megK0qpIKKSIqqZDSvoJrQ",
    authDomain: "first-try-1ad84.firebaseapp.com",
    databaseURL: "https://first-try-1ad84.firebaseio.com",
    projectId: "first-try-1ad84",
    storageBucket: "first-try-1ad84.appspot.com",
    messagingSenderId: "839691935720",
    appId: "1:839691935720:web:ff13689299aac970e50e5d",
    measurementId: "G-GZ67CMQSQH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebase utils
const db = firebase.firestore()    // create a reference to our database and store it in var db

// date issue fix according to firebase
const settings = { timestampsInSnapshots: true }
db.settings(settings)

// firebase collections
const studentsCollection = db.collection('students')

export {
    db,
    studentsCollection,
}
