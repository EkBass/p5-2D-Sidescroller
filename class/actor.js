class Actor {
	constructor(iFrames, aFrames) {
		this.idleFrames 		= iFrames;
		this.attackFrames 	= aFrames;
		this.init();
	}
  
	init() {
		this.x 		= this.newX();
		this.y 		= _ground - 61;
		this.speed 	= _gameSpeed;
		this.frame 	= 0;
		this.attack = false;
		this.r 		= 0;
	}

	newX() {
		return random(_width / 4) + _width;
	}
	play(plrX, plrY, sounds) {
		this.r = 0;
		this.checkAttack(plrX, plrY, sounds);
		this.move();
		this.frame++;
		if(this.frame > 9) { 
			this.frame = 0;
		}
	
		if(this.y < _width && this.y > 0) 
		{
			this.display();
		}
		return this.r;
	}
  
	move() {
		if(this.y < (_ground - this.size)) 
		{
			this.y += this.speed;
		}
		if(this.y > (_ground - this.size)) 
		{
			this.y = _ground - this.size / 2;
		}
		if(this.x - this.speed < 0) 
		{
			this.init();
		}
    
		this.x -= this.speed;
	}
  
	display() {
		if(this.attack) {
			image(this.attackFrames[this.frame], this.x, this.y);
		} else {
			image(this.idleFrames[this.frame], this.x, this.y);
		}
	}
	
	checkAttack(plrX, plrY) {
		if(Math.abs(plrX - this.x) < _attackRangeX && Math.abs(plrY - this.y) < _attackRangeY) 
		{
			if(this.attack == false) {
				this.frame = 0;
				sounds[_hitSnd].play();
				this.r = this.r - _damage;
			}
			this.attack = true;
		} else {
			this.attack = false;
		}
	}
}
