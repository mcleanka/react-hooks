import React from "react";
import Gallery from "../page/Gallery";
import Home from "../page/Home";
import Login from "../page/Login";

// eslint-disable-next-line
export default [
	{
		path: '/',
		exact: true,
		component: () => <Home />,
	},
	{
		path: '/login',
		component: () => <Login />,
	},
	{
		path: '/',
		component: () => <Gallery />,
	}
];