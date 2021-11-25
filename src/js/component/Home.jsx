import React from "react";

import { useState } from "react";

//Components

//Resources

//Styles
import HomeStyle from "../../styles/Home.scss";

const Home = () => {
	const [Time, setTime] = useState({
		ms: 0,
		s: 0,
		m: 0,
		h: 0
	});

	let newMs = Time.ms;
	let newS = Time.s;
	let newM = Time.m;
	let newH = Time.h;

	const watch = () => {
		if (newMs === 100) {
			newS++;
			newMs = 0;
		}

		if (newS === 60) {
			newM++;
			newS = 0;
		}

		if (newM === 60) {
			newH++;
			newM = 0;
		}

		newMs++;

		return setTime({
			ms: newMs,
			s: newS,
			m: newM,
			h: newH
		});
	};

	const init = () => {
		watch();
		setInterval(watch, 10);
	};

	return (
		<div className="container dark">
			<div className="Counter">
				<div className="calendar">
					<span className="h">{Time.h}h</span>
					<span className="m">{Time.m}min</span>
					<span className="s">{Time.s}s</span>
					<span className="ms">{Time.ms}ms</span>
				</div>
			</div>

			<button className="stopwatch-btn stopwatch-btn-gre" onClick={init}>
				Start
			</button>
		</div>
	);
};

export default Home;
