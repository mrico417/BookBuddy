/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`;

export const Books = ({ token }) => {
	// useState to store books
	const [books, setBooks] = useState([]);

	// search option
	const [filteredBooks, setFilteredBooks] = useState([]);

	// get the books from API with useEffect
	const getBooks = async () => {
		try {
			const response = await fetch(APIURL, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const result = await response.json();

			//console.log(result.books);
			setBooks(result.books);
			setFilteredBooks(result.books);
		} catch (err) {
			//console.log(err);
		}
	};

	useEffect(() => {
		getBooks();
	}, []);

	const onSearchChange = (event) => {
		const searchTerm = event.target.value.toLowerCase();
		// console.log(event.target.value.toLowerCase());
		const filteredBooks = books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm)
		);
		setFilteredBooks(filteredBooks);
	};

	// once display is a success, code the BookCard.jsx component
	// then, use map to create BookCard component and send { book } as prop to display

	return (
		<div className="cls-books-container">
			<div className="search-container">
				<label htmlFor="searchInput">Search a Book:</label>
				<input
					type="text"
					name="searchInput"
					id="searchInput"
					onChange={onSearchChange}
				/>
			</div>
			<div className="cls-books-list">
				{filteredBooks.map((book) => {
					return <BookCard key={book.id} book={book} token={token} />;
				})}
			</div>
		</div>
	);
};
