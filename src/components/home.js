import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./imgSlider";
import Viewers from "./viewers";
import Movies from "./movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		db.collection("movies").onSnapshot((snapshot) => {
			let tempMovies = snapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			//collecting the data we are dispatching an action by the next line so that the data can be avaliable globally
			dispatch(setMovies(tempMovies));
			// console.log(tempMovies);
		});
	}, []);

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
		</Container>
	);
}

export default Home;

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;
	&::before {
		background: url("/images/home-background.png") center center / cover no-repeat
			fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
