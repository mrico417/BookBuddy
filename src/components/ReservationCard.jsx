export const ReservationCard = ({
	token,
	reservation,
	divIndex,
	reservations,
	setReservations,
}) => {
	const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservation.id}`;

	const deleteReservation = async (divIndex) => {
		try {
			const response = await fetch(APIURL, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			const result = await response.json();
			//console.log(result);

			//remove the ReservationCard from the UI
			const updatedReservations = reservations.filter(
				(reservation, i) => divIndex !== i
			);
			setReservations(updatedReservations);
		} catch (err) {
			//console.log(err);
		}
	};

	return (
		<div className="cls-reservation-card">
			<h4>{reservation.title}</h4>
			<img src={reservation.coverimage} alt={reservation.title} />
			<button onClick={() => deleteReservation(divIndex)}>
				Delete Reservation
			</button>
		</div>
	);
};
