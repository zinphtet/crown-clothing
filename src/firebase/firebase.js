// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDbXXm-ebs0U--BdpuJhCXH_MHaRAHKZHI',
	authDomain: 'crown-clothing-4248a.firebaseapp.com',
	projectId: 'crown-clothing-4248a',
	storageBucket: 'crown-clothing-4248a.appspot.com',
	messagingSenderId: '422893091761',
	appId: '1:422893091761:web:0989fc6a0c587d2788db90',
	measurementId: 'G-B259Q8VGBB',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGoogle = () => {
	signInWithPopup(auth, provider);
};

// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'Select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

