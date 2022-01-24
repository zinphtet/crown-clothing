import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('/users')
	.doc('WZ2GsJJ4Z4TgC1EOpKjb')
	.collection('shopItem')
	.doc('1QVnRBmoG3nFuIGe9S6n');

firestore.doc('/users/WZ2GsJJ4Z4TgC1EOpKjb/shopItem/1QVnRBmoG3nFuIGe9S6n');
firestore.collection('/users/WZ2GsJJ4Z4TgC1EOpKjb/shopItem');
