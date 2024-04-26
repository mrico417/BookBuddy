import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Navigations } from "./components/Navigations";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Books } from "./components/Books";
import { Login } from "./components/Login";
import { SingleBook } from "./components/SingleBook";
import { Account } from "./components/Account";
import { Reservations } from "./components/Reservations";

function App() {
	const [token, setToken] = useState(null);

	return (
		<>
			<div className="cls-main-container">
				<Navigations token={token} />
				<Routes>
					<Route path="/" element={<Books token={token} />} />
					<Route path="/books" element={<Books token={token} />} />
					<Route path="/books/:bookId" element={<SingleBook token={token} />} />
					<Route path="/register" element={<Register setToken={setToken} />} />
					<Route path="/login" element={<Login setToken={setToken} />} />
					<Route
						path="/account"
						element={<Account token={token} setToken={setToken} />}
					/>
					<Route
						path="/reservations"
						element={<Reservations token={token} />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
