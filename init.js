const _width        = 1280;
const _heigth       = 720;
const _ground       = _heigth * 0.925;
const _gameSpeed    = 5;
const _actorsTotal  = 9;
const _fps          = 40;
const _frames 		= 9;
const _attackRangeX = 30;
const _attackRangeY = 35;
const _damage       = 250;
const _jumpSnd 		= 0;
const _hitSnd       = 1;
const _levelSnd     = 2;
const _goSnd        = 3;
const _bgSongSnd     = 4;
const _levelUp      = 250;
const _menu         = 1;
const _play         = 2;
const _gameover     = 3;



const _imgSuffix 	= '.png';
const _imgPlrRun 	= 'img/plr/Run';
const _imgPlrJump   = 'img/plr/Jump';
const _imgGzIdle    = 'img/girlZombie/Idle';
const _imgGzAttack  = 'img/girlZombie/Attack';
const _imgBzIdle    = 'img/boyZombie/Idle';
const _imgBzAttack  = 'img/boyZombie/Attack';
const _imgCloud     = 'img/Cloud';

let imgBackground;
let imgGameOver;
let imgLogo;
let imgDetails;
let Actors = [];
let Clouds = [];
let levelCount;
let curLevel;
let inGame;
let highscore;
let gameOverFrames;
let sounds = [];