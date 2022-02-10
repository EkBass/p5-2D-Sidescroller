function playActors(plrX, plrY, sounds) {
	let r = 0;
	for(let i = 0; i < Actors.length; i++) {
		r+= Actors[i].play(plrX, plrY, sounds);
	}
	return r;
}

function createFrames(p) {
	let frames = [];
	for(let i = 0; i <= _frames; i++)
	{
		let s = p + i + _imgSuffix;
		frames[i] = loadImage(s);
	}
  	return frames;
}

function playClouds() {
	for(let i = 0; i < Clouds.length; i++) {
		Clouds[i].play();
	}
}

function menu() {
	image(imgLogo, 350, 100);
	image(imgDetails, 380, 200);
	if(keyIsDown(UP_ARROW)) {
		inGame = _play;
	}
}

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	
	do
	{
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}