import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDoWWco51kPns3lY1o1UzCDbYw2ldXAHMs",
    authDomain: "authentication-using-mobile.firebaseapp.com",
    projectId: "authentication-using-mobile",
    storageBucket: "authentication-using-mobile.appspot.com",
    messagingSenderId: "331650959943",
    appId: "1:331650959943:web:42de32368b9e9551acbf62"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;