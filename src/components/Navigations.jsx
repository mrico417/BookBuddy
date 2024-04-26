/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom";

export const Navigations = ({ token }) => {
	return (
		<div className="cls-navigations-container">
			<Link to="/books">Books</Link>

			{token ? (
				<>
					<Link to="/reservations">Reservations</Link>
					<Link to="/account">Account</Link>
				</>
			) : (
				<>
					<Link to="/register">Register</Link>
					<Link to="/login">Login</Link>
				</>
			)}
		</div>
	);
};
