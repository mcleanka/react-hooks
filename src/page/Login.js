import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import firebase from '../config/firebase';

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false)


	const history = useHistory()

	function handleForm(e) {
		e.preventDefault();

		if (isLoading) return;

		setIsLoading(true)

		firebase.auth()
			.signInWithEmailAndPassword(form.email, form.password)
			.then((res) => {

				history.replace("/");
				setIsLoading(false)
				setIsLoggedIn(true);
			})
			.catch((e) => {
				setError(e.message)
				setIsLoading(false)
			});
	}

	function handleInput(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	if (isLoggedIn) {
		return <Redirect to="/" />
	}

	return (
		<div className="flex h-screen bg-gray-200">
			<div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
				<form className="m-5 w-10/12" onSubmit={handleForm}>


					<h1 className="w-full text-4xl tracking-widest text-center my-6">
						Login
					</h1>

					{(error !== "") && <p>{error}</p>}

					<div className="w-full my-6">
						<input
							type="email"
							className="p-2 rounded shadow w-full text-black"
							placeholder="Email or Username"
							value={form.email}
							name="email"
							onChange={handleInput} />
					</div>
					<div className="w-full my-10">
						<input
							type="password"
							className="p-2 rounded shadow w-full text-black"
							placeholder="Password"
							name="password"
							onChange={handleInput}
							value={form.password} />
					</div>
					<div className="w-full my-10">
						<button type="submit" className="p-2 rounded w-full shadow bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
							{
								isLoading ? <i className="fas fa-circle-notch fa-spin"></i>
									: "Login"
							}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
