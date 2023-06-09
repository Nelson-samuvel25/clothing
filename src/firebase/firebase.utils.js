import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCSKZ77s2fI1gmMeyET2EPTpldF2wWwgOQ",
    authDomain: "cloth-db-82799.firebaseapp.com",
    projectId: "cloth-db-82799",
    storageBucket: "cloth-db-82799.appspot.com",
    messagingSenderId: "800848427929",
    appId: "1:800848427929:web:b61bc291ee1d43cf397108",
    measurementId: "G-HNLZYH9E59"
  };


  export const createUserProfileDoc =  (async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot =await userRef.get();

    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        }
        catch(err){
            console.log("error affecting data",err);
        }

       
    }   

    return userRef;
    
  }) 

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = ()=>  auth.signInWithPopup(provider)
                                        .then((res)=>{
                                            console.log("Logged in",res);
                                        })
                                        .catch((err)=>{
                                            console.log("caught error popup",err);
                                        })

  export default firebase;
