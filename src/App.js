import React, { useEffect, useState } from "react";
import routes from './utils/routes';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import firebase from './config/firebase';
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";

export default function App() {
	const [user, setUser] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useState(false)


	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true)
				setUser(user);
			} else {
				setUser({});
				setIsLoggedIn(false)
			}
		});
	}, []);

	return <Router>
		<AppContext.Provider value={[
			isLoggedIn, user
		]}>
			<Header />
			<Switch>
				{
					routes.map((route, index) => {
						if (route.path === '/login') {
							if (isLoggedIn) {
								return <Redirect to="/" />
							}
						}

						if (route.path === '/gallery') {
							<AuthRoute
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						}

						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						)
					})
				}
			</Switch>
		</AppContext.Provider>
	</Router>;
}