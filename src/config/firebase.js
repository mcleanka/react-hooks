import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCY3WrAt09_Vq51yJ_fBdJ03rF49B2QicY",
	authDomain: "spash-app.firebaseapp.com",
	projectId: "spash-app",
	storageBucket: "spash-app.appspot.com",
	messagingSenderId: "637791961994",
	appId: "1:637791961994:web:8f00452f3904632659be73",
	measurementId: "G-H4XQ70NNP7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;