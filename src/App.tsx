import { useEffect, useRef } from "react";
import { useScript } from "usehooks-ts";

export default function App() {

	const status = useScript(`/Gradient.js`, {
		removeOnUnmount: false,
	})


	useEffect(() => {
		if (status === "ready") {
			const canvasElement = document.getElementById("gradient-canvas");
			const gradient: any = new Gradient();
			if (canvasElement) {
				gradient.initGradient("#gradient-canvas");
			} else {
				gradient.pause();
			}

		}
	}, [status]);


	return (
		<>
			<canvas id="gradient-canvas" data-transition-in />
			<div id="app" className="App">
				<div className="pageContainer">
					<div className="userApp card">
						<img src="https://github.com/menonparik/xmb-on-web/blob/main/images/video.png?raw=true" />
					</div>
					<div className="userApp card">
						<img src="https://github.com/menonparik/xmb-on-web/blob/main/images/video.png?raw=true" />
					</div>
					<div className="userApp card">
						<img src="https://github.com/menonparik/xmb-on-web/blob/main/images/video.png?raw=true" />
					</div>
					<div className="userApp card">
						<img src="https://github.com/menonparik/xmb-on-web/blob/main/images/video.png?raw=true" />
					</div>
				</div>
			</div>
		</>
	);
}
