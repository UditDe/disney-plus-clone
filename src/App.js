import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./components/detail";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/detail" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
