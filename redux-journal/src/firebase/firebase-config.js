import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArjfyfwips6YLjkhb4YmQWVMneagTupT0",
  authDomain: "react-redux-course-2b2f4.firebaseapp.com",
  projectId: "react-redux-course-2b2f4",
  storageBucket: "react-redux-course-2b2f4.appspot.com",
  messagingSenderId: "477944064705",
  appId: "1:477944064705:web:71a87a39669b4ea16a4240"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}