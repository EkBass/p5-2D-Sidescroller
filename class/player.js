class Player {
	constructor(runFrames, jumpFrames) {
		this.RunFrames 	= runFrames;
		this.JumpFrames 	= jumpFrames;
		this.init();
	}
  
	init() {
		this.baseX  	= 50;
		this.maxX   	= _width * 0.75;
		this.baseY  	= _ground - 61;
		this.gravity 	= 0.3;
		this.op 		= -10;
		this.points 	= 0;
		
		this.frame  	= 0;
		this.x      	= this.baseX;
		this.y      	= this.baseY;
		this.velocity 	= 0;
		this.jump 		= false;
	}
	play(up, right, sounds) {
		this.frame = this.updateFrame();
	
		if (up == true && this.jump == false) {
			this.jump = true;
			this.frame = 0;
			this.velocity += this.op;
			sounds[_jumpSnd].play();
		}			

		if(this.jump) {
			this.velocity  += this.gravity;
			this.y += this.velocity;
    
			if(this.y>this.baseY) {
				this.velocity = 0;
				this.y = this.baseY;
				this.jump = false;
			}
		}
	
		if(right == true && this.x < this.maxX) 
		{
			this.x = this.x +_gameSpeed;
		}
		if(!right && this.x > this.baseX) 
		{
			this.x = this.x -(_gameSpeed / 2);
		}
	
		if(this.jump == false) 
		{
			image(this.RunFrames[this.frame], this.x, this.y);
		} else {
			image(this.JumpFrames[this.frame], this.x, this.y);
		}
	}

	updateFrame() {
		this.frame++;
		if(this.frame >= this.RunFrames.length) 
		{
			this.frame = 0;
		}
		return this.frame;
	}
  
	getX() {
		return this.x;
	}
  
	getY() {
		return this.y;
	}
	
	setPoints(p) {
		this.points++;
		this.points+=p;
		return this.points;
	}

	getPoints() {
		return this.points;
	}
}

