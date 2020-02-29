import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//MEMO(aida) 同じ階層にあるfirebase.config.js内のconfigを設定してください。
import config from "./firebase.config";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //MEMO(aida) 1: CRUD操作するためのオブジェクトをfirestore.doc(パス)で取得する
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);
    //MEMO(aida) 2: userがfirebase dbに未登録の場合は登録する
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating users", error.message);
        }
    }

    //MEMO(aida) 3: userに対してCRUD操作をするためのオブジェクトを返す
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
