import "./App.css";
import Nav from "./Components/Nav/NavigationBar";

import Home from "./Pages/Home";
import Watchlist from "./Pages/Watch List";
import Recommendation from "./Pages/Recommendation";
import Watchingnow from "./Pages/WatchingNow";
import AddMovies from "./Pages/AddMovieManual";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Routes,
	Link,
} from "react-router-dom";
import Search from "./Pages/AddMovieSearch";

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/addmovie" element={<AddMovies />}></Route>
					<Route path="/search" element={<Search />}></Route>
					<Route path="/watchlist" element={<Watchlist />}></Route>
					<Route path="/watchingnow" element={<Watchingnow />}></Route>
					<Route path="/recommendation" element={<Recommendation />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
