import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhdSdJZ4z2LzmqTxaf3lAPqD5oF7MFKHQ",
  authDomain: "ninja-vue-firebase-bc2f8.firebaseapp.com",
  projectId: "ninja-vue-firebase-bc2f8",
  storageBucket: "ninja-vue-firebase-bc2f8.appspot.com",
  messagingSenderId: "403361711810",
  appId: "1:403361711810:web:cb09c0cbc99fe7bec45d5b",
  measurementId: "G-DJ7L8HSQ5J"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }