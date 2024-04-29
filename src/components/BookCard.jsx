import { useNavigate } from "react-router-dom";

export const BookCard = ({ book, token, fromSingleBook }) => {
	const navigate = useNavigate();

	const handleCheckout = async (isAvailable) => {
		//console.log(`handleCheckout`);

		try {
			const response = await fetch(
				`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						available: isAvailable,
					}),
				}
			);

			const result = await response.json();
			//console.log(result);
		} catch (err) {
			//console.log(err);
		}
	};

	return (
		<div className="cls-book-card">
			<h3>{book.title}</h3>
			<img src={book.coverimage} alt={book.title} />
			<h4>{book.author}</h4>
			<h5>{book.available ? `In Library` : `Not Available`}</h5>
			{fromSingleBook && token && book.available ? (
				<>
					<p>{book.description}</p>
					<button onClick={() => handleCheckout(false)}>Checkout Book</button>
					<button onClick={() => navigate(`/books`)}>Home</button>
				</>
			) : fromSingleBook && token && !book.available ? (
				<>
					<p>{book.description}</p>
					<button onClick={() => handleCheckout(true)}>Return Book</button>
					<button onClick={() => navigate(`/books`)}>Home</button>
				</>
			) : fromSingleBook ? (
				<>
					<p>{book.description}</p>
					<button onClick={() => navigate(`/books`)}>Home</button>
				</>
			) : (
				<button onClick={() => navigate(`/books/${book.id}`)}>
					See Details
				</button>
			)}
		</div>
	);
};
