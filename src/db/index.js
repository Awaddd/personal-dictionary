import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB3fH6vUodo74yV-k2yaVRz9XxQo4jj96c",
    authDomain: "personal-dictionary-e110c.firebaseapp.com",
    databaseURL: "https://personal-dictionary-e110c.firebaseio.com",
    projectId: "personal-dictionary-e110c",
    storageBucket: "",
    messagingSenderId: "279716920378"
}

firebase.initializeApp(config)

const db = firebase.firestore()
const firebaseAuth = firebase.auth()

export {
    db,
    firebaseAuth
}
