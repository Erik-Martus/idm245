// http://www.lessmilk.com/game/pixel-war-2/
gameObj.Play = function (game) {
  var txScore;
  var timerObj;
  var timerSeconds;
  var txTime;

  var spPlayer;
  var hearts;
  var heartFrame;
};

gameObj.Play.prototype = {
  create: function () {
    console.log("State - Play")
    this.stage.backgroundColor = '#330099';

    this.physics.startSystem(Phaser.Physics.ARCADE);

    // Add player
    this.spPlayer = this.add.sprite(this.world.centerX, 850, 'pl_dark');
    this.spPlayer.anchor.setTo(0.5, 0);
    this.physics.arcade.enable(this.spPlayer);
    this.spPlayer.body.collideWorldBounds = true;
    this.spPlayer.body.setSize(this.spPlayer.width, this.spPlayer.height - 10, 0, 0);
    this.lives = 3;

    // Add rain
    this.rain = this.add.group();
    this.rainTime = this.time.now + 2000;


    // this.rainTime = 0;

    // raindrops = this.add.group();
    // raindrops.createMultiple(25, 'raindrop');
    // raindrops.setAll('outOfBoundsKill', true);
    // // this.physics.arcade.enable(raindrops);
    // raindrops.setAll('enableBody', true);

    // Add scenery to stage
    var spCloud_dark01 = this.add.sprite(29, 105, 'cloud_dark01');
    var spCloud_dark02 = this.add.sprite(360, 105, 'cloud_dark02');
    var spGround = this.add.sprite(0, 900, 'ground_game');
    this.physics.arcade.enable(spGround);
    spGround.enableBody = true;
    spGround.body.immovable = true;



    // Add text
    var score = gameObj.gScore;
    var time = gameObj.gTime;

    var headerStyle = {
      fill: "#ffffff",
      font: "35px Press Start 2P",
      alignment: "left"
    };
    var gameBarStyle = {
      fill: "#ffffff",
      font: "20px Press Start 2P",
      alignment: "right"
    };

    // Add game bar items
    hearts = this.add.sprite(15, 900, 'hearts');
    heartFrame = 0;
    hearts.frame = heartFrame;
    txScore = this.add.text(350, 915, "Points:", headerStyle);
    txScoreNum = this.add.text(705, 915, score, headerStyle);
    txScoreNum.anchor.setTo(1, 0);

    // Add header text
    txTime = this.add.text(this.world.centerX, 30, time, headerStyle);
    txTime.anchor.setTo(0.5, 0);

    // Timer setup
    timerSeconds = 120; // 02:00 minutes = 120 seconds
    timerObj = this.time.create(false);
    timerObj.loop(1000, this.updateTimerFunct, this);
    timerObj.start();
  },
  update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.spPlayer.x -= 6;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.spPlayer.x += 6;
    }

    // Collisions
    this.physics.arcade.overlap(this.spPlayer, this.rain, this.playerHit, null, this);

    // Add raindrops
    if (this.game.time.now > this.rainTime) {
      this.rainTime = this.time.now + 300;
      this.newRaindrop();
    }
  },
  updateHearts: function () {
    heartFrame++;
    hearts.frame = heartFrame;
  },
  newRaindrop: function () {
    var raindrop = this.rain.create(this.rnd.integerInRange(50, 670), 0, 'raindrop');
    raindrop.y -= raindrop.height / 2 + 1;
    this.physics.arcade.enable(raindrop);

    raindrop.checkWorldBounds = true;
    raindrop.outOfBoundsKill = true;

    raindrop.anchor.setTo(0.5, 0.5);
    raindrop.scale.setTo(1, 1);
    raindrop.body.velocity.y = 500;

  },
  playerHit: function (spPlayer, raindrop) {
    if (heartFrame < 3) {
      heartFrame++;
      hearts.frame = heartFrame;
    }
    raindrop.kill();
    // if (sound) this.hitSound.play();
    this.lives -= 1;
    console.log(this.lives);
    if (this.lives === 0) {
      console.log("Game Over");
    }
  },
  updateTimerFunct: function () {
    timerSeconds--;
    displayMin = Math.floor(timerSeconds / 60);
    displaySec = Math.floor(timerSeconds) % 60;
    if (displayMin < 10) {
      displayMin = "0" + displayMin;
    }
    if (displaySec < 10) {
      displaySec = "0" + displaySec;
    }

    if (timerSeconds == 0) {
      this.checkScoreFunct();
    }

    gameObj.gTime = displayMin + ":" + displaySec;
    txTime.text = gameObj.gTime;
  },
  checkScoreFunct: function () {
    if (gameObj.gScore > 100) {
      this.state.start('Win');
    } else {
      this.state.start('Lose');
    }
  }
}