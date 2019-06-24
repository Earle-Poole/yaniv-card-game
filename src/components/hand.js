import React from 'react';

export default function Hand ( props ) {
	let handArr = [];
	let opponentCardCount = props.opponentCardCount;
	let positionFromPlayer = props.positionFromPlayer;

	for(let i = 0; i < opponentCardCount[positionFromPlayer - 1]; i++){
		handArr.push(
			<li className="card back" key={i}></li>
		);
	};

	return (
		<div className="playingCards faceImages">
			<ul className="hand">
				{handArr}
			</ul>
		</div>
	);
};
