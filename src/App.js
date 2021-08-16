import React from "react";
import routes from './utils/routes';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
	return <Router>
		<>
			<Header />
			<Switch>
				{
					routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))
				}
			</Switch>
		</>
	</Router>;
}