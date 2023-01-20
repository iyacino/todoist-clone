import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDRqMCEAev_eFcSeM1BwTdp_zSYTZNPJO0",
  authDomain: "todoist-clone-e4465.firebaseapp.com",
  projectId: "todoist-clone-e4465",
  storageBucket: "todoist-clone-e4465.appspot.com",
  messagingSenderId: "390109287906",
  appId: "1:390109287906:web:141c004d699f6fb3abd5bb"
});

export { firebaseConfig as firebase};
