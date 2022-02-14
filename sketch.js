function preload() {
	sounds[_jumpSnd] = loadSound('audio/Jump.mp3');
	sounds[_hitSnd] = loadSound('audio/Hit.mp3');
	sounds[_levelSnd] = loadSound('audio/LevelUp.mp3');
	sounds[_goSnd] = loadSound('audio/GameOver.mp3');
	sounds[_bgSongSnd] = loadSound('audio/Kevin MacLeod - 8bit Dungeon Boss.mp3');
}

function setup() {
	imgBackground = loadImage('img/Background.png');
	imgGameOver = loadImage('img/gameover.png');
	imgLogo = loadImage('img/logo.png');
	imgDetails = loadImage('img/details.png');
	Plr = new Player(createFrames(_imgPlrRun), createFrames(_imgPlrJump));

	Actors.push(new Actor(createFrames(_imgGzIdle), createFrames(_imgGzAttack)));
	Actors.push(new Actor(createFrames(_imgBzIdle), createFrames(_imgBzAttack)));

	Clouds.push(new Cloud(loadImage(`${_imgCloud}1.png`)));
	Clouds.push(new Cloud(loadImage(`${_imgCloud}2.png`)));	
	Clouds.push(new Cloud(loadImage(`${_imgCloud}3.png`)));

	levelCount = 0;
	curLevel = 1;
	inGame = _menu;
	highscore = 0;
	gameOverFrames = 0;
	
	createCanvas(_width, _heigth);
	frameRate(_fps);
	textSize(32);
	sounds[_bgSongSnd].play();
}



function draw() {
	let wantJump = false;
	let wantRight = false;

	background(imgBackground);

	if (mouseIsPressed) {
		wantJump = (floor(mouseX) <= (_width / 2));
		wantRight = (floor(mouseX) >= (_width / 2));
		console.log(wantJump);
	} else {
		if(keyIsDown(UP_ARROW)) {
			wantJump = true;
		}
		if(keyIsDown(RIGHT_ARROW)) {
			wantRight = true;
		}
	}

	if(inGame == _menu) {
		menu();

	} else if(inGame == _gameover) {
		gameOverFrames++;
		image(imgGameOver, 290, 200);
		text('Your best was ' + highscore, 500, 350);
		if(gameOverFrames > _fps * 4) {
			location.reload();
		}
	} else {
		text('Points ' + Plr.setPoints(playActors(Plr.getX(), Plr.getY(), sounds)) + '      Level ' + curLevel, 20, _ground + 40);
		Plr.play(wantJump, wantRight, sounds);

		if(Plr.getPoints() < 0) {
			inGame = _gameover;
			sounds[_goSnd].play();
		}
		if(Plr.getPoints() >= highscore) {
			highscore = Plr.getPoints();
		}

		text('Highscore: ' + highscore, 500, _ground + 40);
		playClouds();
		levelCount++;
		if(levelCount == _levelUp) {
			levelCount = 0;
			curLevel++;
			sounds[_levelSnd].play();
			if(random(10) >= 5) {
				Actors.push(new Actor(createFrames(_imgBzIdle), createFrames(_imgBzAttack)));
			} else {
				Actors.push(new Actor(createFrames(_imgGzIdle), createFrames(_imgGzAttack)));
			}
		}
	}
}
