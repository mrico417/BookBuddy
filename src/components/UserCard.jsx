import { useEffect, useState } from "react";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`;

export const UserCard = ({ token }) => {
	const [meUser, setMeUser] = useState({});
	const getUser = async () => {
		try {
			const response = await fetch(APIURL, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await response.json();
			setMeUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="cls-usercard-container">
			<p>{meUser.firstname}</p>
			<p>{meUser.lastname}</p>
			<p>{meUser.email}</p>
		</div>
	);
};
