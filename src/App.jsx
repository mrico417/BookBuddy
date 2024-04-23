import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Navigations } from "./components/Navigations";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Books } from "./components/Books";
import { Login } from "./components/Login";
import { SingleBook } from "./components/SingleBook";
import { Account } from "./components/Account";

function App() {
	const [token, setToken] = useState(null);

	return (
		<>
			<div className="cls-main-container">
				<Navigations />
			</div>
			<Routes>
				<Route path="/" element={<Books token={token} />} />
				<Route path="/books" element={<Books token={token} />} />
				<Route path="/books/:bookId" element={<SingleBook token={token} />} />
				<Route path="/register" element={<Register setToken={setToken} />} />
				<Route path="/login" element={<Login setToken={setToken} />} />
				<Route path="/account" element={<Account token={token} />} />
			</Routes>
			<h1>
				<img id="logo-image" src={bookLogo} />
				Library App
			</h1>

			<p>
				Complete the React components needed to allow users to browse a library
				catalog, check out books, review their account, and return books that
				they've finished reading.
			</p>

			<p>
				You may need to use the `token` in this top-level component in other
				components that need to know if a user has logged in or not.
			</p>

			<p>
				Don't forget to set up React Router to navigate between the different
				views of your single page application!
			</p>
		</>
	);
}

export default App;
