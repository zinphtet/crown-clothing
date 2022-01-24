import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDbXXm-ebs0U--BdpuJhCXH_MHaRAHKZHI',
	authDomain: 'crown-clothing-4248a.firebaseapp.com',
	projectId: 'crown-clothing-4248a',
	storageBucket: 'crown-clothing-4248a.appspot.com',
	messagingSenderId: '422893091761',
	appId: '1:422893091761:web:0989fc6a0c587d2788db90',
	measurementId: 'G-B259Q8VGBB',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'Select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	var userRef = db.collection('users').doc(`${userAuth.uid}`);

	const snapShot = await userRef.get();

	// console.log(snapShot);
	// console.log(snapShot.exists);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating users ', err.message);
		}
	}
	return userRef;
};

export default firebase;
