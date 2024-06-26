/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`;

export const Login = ({ setToken }) => {
	const [loginCredentials, setLoginCredentials] = useState();
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(APIURL, {
				method: "POST",
				body: JSON.stringify({
					email: loginCredentials.email,
					password: loginCredentials.password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const result = await response.json();
			//console.log(result.token);
			setToken(result.token);
			navigate("/");
		} catch (err) {
			//console.log(err);
		}
	};

	const handleLoginInputChange = (event) => {
		//console.log(event.target.name, event.target.value);

		setLoginCredentials({
			...loginCredentials,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className="cls-login-container">
			<h1>Login</h1>
			<form
				onSubmit={handleLogin}
				onChange={handleLoginInputChange}
				id="login-form"
			>
				<input type="text" name="email" id="email" placeholder="email" />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};
