/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookCard } from "./BookCard";

export const SingleBook = ({ token }) => {
	const { bookId } = useParams();
	const [book, setBook] = useState({});

	// update the APIURL based on URL's bookId
	const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`;

	// store the book in useState
	// fetch the book with updated APIURL in useEffect
	const getBook = async (bookId) => {
		try {
			const response = await fetch(APIURL, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const result = await response.json();
			setBook(result.book);
			console.log(result.book);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getBook();
	}, []);

	return (
		<div className="cls-single-book">
			<h1>Single Book</h1>
			{<BookCard book={book} />}
		</div>
	);
};
