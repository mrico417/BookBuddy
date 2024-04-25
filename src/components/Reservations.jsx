import { useEffect, useState } from "react";
import { ReservationCard } from "./ReservationCard";

export const Reservations = ({ token }) => {
	const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`;
	const [reservations, setReservations] = useState([]);

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

	const handleDelete = (divIndex) => {
		const updatedReservations = reservations.filter(
			(reservation, i) => divIndex !== i
		);
		setReservations(updatedReservations);
	};

	return (
		<div className="cls-reservations-container">
			<h2>Reservations</h2>
			{reservations.map((reservation, indx) => (
				<>
					<ReservationCard
						key={reservation.id}
						token={token}
						reservation={reservation}
						divIndex={indx}
						reservations={reservations}
						setReservations={setReservations}
					/>
				</>
			))}
		</div>
	);
};
