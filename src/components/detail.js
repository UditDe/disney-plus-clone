import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
	const { id } = useParams();
	console.log("id is ", id);

	const [movie, setMovie] = useState();

	useEffect(() => {
		//grab the movie info from db
		db
			.collection("movies")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					//save the movie data
					setMovie(doc.data());
				} else {
					//redirect to homepage
				}
			});
	}, []);

	console.log("movie is ", movie);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img
							src={`${
								movie
									? movie.backgroundImg
									: "	https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/9733/1379733-i-4a16919c368f"
							}`}
							alt=""
						/>
					</Background>
					<ImageTitle>
						<img
							src={`${
								movie
									? movie.titleImg
									: "https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/9735/1379735-t-1d5398d017f8"
							}`}
							alt=""
						/>
					</ImageTitle>

					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="" />
							<span>PLAY</span>
						</PlayButton>
						<TrailerButon>
							<img src="/images/play-icon-white.png" alt="" />
							<span>trailer</span>
						</TrailerButon>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButton>
							<img src="/images/group-icon.png" alt="" />
						</GroupWatchButton>
					</Controls>
					<Subtitle>{movie ? movie.subtitle : "This is subtitle"}</Subtitle>
					<Description>
						{movie
							? movie.description
							: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
					</Description>
				</>
			)}
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: calc(3.5vw - 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed; //postion fixed or absolute needs always a parent that have a postion relative
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	margin-top: 60px;
	height: 30vh;
	min-height: 170px;
	width: 35vh;
	min-width: 200px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	cursor: pointer;
	border-radius: 4px;
	font-size: 15px;
	padding: 0px 24px;
	margin-right: 22px;
	display: flex;
	align-items: center;
	height: 56px;
	background-color: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const TrailerButon = styled(PlayButton)`
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
`;

const AddButton = styled.button`
	margin-right: 16px;
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	span {
		font-size: 30px;
		color: white;
	}

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const GroupWatchButton = styled(AddButton)`
	background-color: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	max-width: 760px;
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
`;
