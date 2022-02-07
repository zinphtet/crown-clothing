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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'Select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = db.collection('users').doc(`${userAuth.uid}`);

	const snapShot = await userRef.get();
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

export const convertCollectionSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((collection) => {
		const { title, items } = collection.data();

		return {
			id: collection.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});
	return transformedCollection;
};

export const addCollectionAndDocument = async (collectionKey, ObjArr) => {
	const collectionRef = db.collection(collectionKey);
	const batch = db.batch();
	ObjArr.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export default firebase;
