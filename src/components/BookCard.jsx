import { useNavigate } from "react-router-dom";

export const BookCard = ({ book }) => {
	const navigate = useNavigate();

	return (
		<div className="cls-book-card">
			<h3>{book.title}</h3>
			<img src={book.coverimage} alt={book.title} />
			<h4>{book.author}</h4>
			<p>{book.description}</p>
			<button onClick={() => navigate(`/books/${book.id}`)}>See Status</button>
		</div>
	);
};
