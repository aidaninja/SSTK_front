import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//MEMO(aida) 同じ階層にあるfirebase.config.js内のconfigを設定してください。
import config from "./firebase.config";

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
