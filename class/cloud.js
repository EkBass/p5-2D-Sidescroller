class Cloud {
    constructor(cloud) {
        this.imgCloud = cloud;
        this.init();
    }

    init() {
        this.speed = random(5, _gameSpeed + 5);
        this.x = _width + random(_width / 2);
        this.y = random(200) + 100;
    }

    play() {
        this.x-= this.speed;
        if(this.x < - 100) {
            this.init();
        }
        if(this.x <= _width) {
            image(this.imgCloud, this.x, this.y);
        }
    }
}
