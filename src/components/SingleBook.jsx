/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useParams } from "react-router-dom";

export const SingleBook = ({ token }) => {
	const { bookId } = useParams();

	return (
		<div className="cls-single-book">
			<h1>Single Book</h1>
			{bookId}
		</div>
	);
};
