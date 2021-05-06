import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrZtDK5feil5xuurtLc7fprRzgq3xkqt0",
  authDomain: "oauth-react-d51f3.firebaseapp.com",
  projectId: "oauth-react-d51f3",
  storageBucket: "oauth-react-d51f3.appspot.com",
  messagingSenderId: "792159560385",
  appId: "1:792159560385:web:aba84f3f8841cd43ad6a40",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, provider, fbProvider, githubProvider };

// id=856809891347-5s8jd5si88qi9lrhoed0j3ha911kj4pf.apps.googleusercontent.com
// secret=YE8cvauW4NSZ1aZxnEsQ4TV_
