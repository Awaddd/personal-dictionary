import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB3fH6vUodo74yV-k2yaVRz9XxQo4jj96c",
    authDomain: "personal-dictionary-e110c.firebaseapp.com",
    databaseURL: "https://personal-dictionary-e110c.firebaseio.com",
    projectId: "personal-dictionary-e110c",
    storageBucket: "",
    messagingSenderId: "279716920378"
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()