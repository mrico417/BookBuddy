/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

export const Register = ({ setToken }) => {
	const [newRegistration, setNewRegistration] = useState();

	const handleRegistration = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(`${APIURL}/users/register`, {
				method: "POST",
				body: JSON.stringify({
					firstname: newRegistration.firstname,
					lastname: newRegistration.lastname,
					email: newRegistration.email,
					password: newRegistration.password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const result = await response.json();
			console.log(result);
			setToken(result.token);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (event) => {
		console.log(event.target.name, event.target.value);
		setNewRegistration({
			...newRegistration,
			[event.target.name]: event.target.value,
		});
		console.log(newRegistration);
	};

	return (
		<div className="cls-register-container">
			<h1>Register</h1>
			<form
				onSubmit={handleRegistration}
				onChange={handleChange}
				id="register-form"
			>
				<input type="text" name="firstname" id="firstname" />
				<input type="text" name="lastname" id="lastname" />
				<input type="text" name="email" id="email" />
				<input type="password" name="password" id="password" />
				<button type="submit">Register</button>
			</form>
		</div>
	);
};
