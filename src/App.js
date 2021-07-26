import React from "react";
import routes from './utils/routes';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
	return <Router>
		<div>
			<Header />
			<Switch>
				{
					routes.map(route => (
						<Route
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))
				}
			</Switch>
		</div>
	</Router>;
}