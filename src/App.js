import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Detail from "./components/detail";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
