/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useNavigate } from "react-router-dom";

export const Account = ({ token, setToken }) => {
	const navigate = useNavigate();

	const handleLogoff = () => {
		setToken(null);
		navigate("/login");
	};

	return (
		<div className="cls-account-container">
			<h1>Account</h1>
			{token ? (
				<>
					<button onClick={() => handleLogoff()}>Log Off</button>
				</>
			) : (
				<h1>Need to login to view Account</h1>
			)}
		</div>
	);
};
