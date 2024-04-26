import { useEffect, useState } from "react";
import { ReservationCard } from "./ReservationCard";

export const Reservations = ({ token }) => {
	const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`;
	const [reservations, setReservations] = useState([]);
	console.log(token);

	const getReservations = async () => {
		try {
			const response = await fetch(APIURL, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			const { reservation } = await response.json();
			console.log(reservation);
			setReservations(reservation);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getReservations();
	}, []);

	return (
		<>
			{token && reservations.length > 0 ? (
				<div className="cls-reservations-container">
					<h2>Reservations</h2>
					{reservations.map((reservation, indx) => (
						<ReservationCard
							key={reservation.id}
							token={token}
							reservation={reservation}
							divIndex={indx}
							reservations={reservations}
							setReservations={setReservations}
						/>
					))}
				</div>
			) : reservations.length === 0 ? (
				<h2>You have no Reservations. What are you waiting for...</h2>
			) : (
				<h1>Need to Login to see your Reservations !</h1>
			)}
		</>
	);
};
