import axios from "axios";
import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN
};
firebase.initializeApp(config);

const uiConfig = {
	signInFlow: "popup",
	signInSuccessUrl: "/onboarding",
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID
	],
	callbacks: {
		signInSuccessWithAuthResult: async ({ user }) => {
			try {
				const response = await axios.post(
					// "https://master-slack-standup.herokuapp.com/api/auth/firebase",
					"http://localhost:5000/api/auth/firebase",
					user
				);
				console.log(response);
				// localStorage.setItem('token', response.data.token);
				// this.props.history.push("/onboarding");
			} catch (err) {
				console.log(err);
			}
		}
	}
};



class Firebase extends Component {
	render() {
		return (
			<StyledFirebaseAuth
				uiConfig={uiConfig}
				firebaseAuth={firebase.auth()}
			/>
		)
	}
}

export default Firebase;
