gameObj.Play = function (game) {
  var txScore;
  var timerObj;
  var timerSeconds;
  var txTime;

  var spPlayer;
  var hearts;
};

gameObj.Play.prototype = {
  create: function () {
    console.log("State - Play")
    this.stage.backgroundColor = '#330099';

    this.physics.startSystem(Phaser.Physics.ARCADE);

    // Add scenery to stage
    var spCloud_dark01 = this.add.sprite(29, 105, 'cloud_dark01');
    var spCloud_dark02 = this.add.sprite(360, 105, 'cloud_dark02');
    var spGround = this.add.sprite(0, 900, 'ground_game');

    // Add player
    spPlayer = this.add.sprite(this.world.centerX, 850, 'pl_dark');
    spPlayer.anchor.setTo(0.5, 0);

    this.physics.arcade.enable(spPlayer);

    spPlayer.body.collideWorldBounds = true;

    // Add game elements
    var spHeat_wave = this.add.sprite(546, 850, 'p-u_heat-wave');
    var spRaindrop01 = this.add.sprite(72, 455, 'raindrop');
    var spRaindrop02 = this.add.sprite(111, 353, 'raindrop');
    var spRaindrop03 = this.add.sprite(132, 620, 'raindrop');
    var spRaindrop04 = this.add.sprite(170, 273, 'raindrop');
    var spRaindrop05 = this.add.sprite(225, 321, 'raindrop');
    var spRaindrop06 = this.add.sprite(267, 486, 'raindrop');
    var spRaindrop07 = this.add.sprite(355, 385, 'raindrop');
    var spRaindrop08 = this.add.sprite(427, 289, 'raindrop');
    var spRaindrop09 = this.add.sprite(459, 494, 'raindrop');
    var spRaindrop10 = this.add.sprite(560, 320, 'raindrop');
    var spRaindrop11 = this.add.sprite(557, 567, 'raindrop');
    var spRaindrop12 = this.add.sprite(623, 435, 'raindrop');

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
    hearts.frame = 0;

    // Add header text
    txScore = this.add.text(20, 14, score, headerStyle);
    txTime = this.add.text(this.world.centerX, 14, time, headerStyle);
    txTime.anchor.setTo(0.5, 0);

    // Timer setup
    timerSeconds = 120; // 02:00 minutes = 120 seconds
    timerObj = this.time.create(false);
    timerObj.loop(1000, this.updateTimerFunct, this);
    timerObj.start();
  },
  update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      spPlayer.x -= 6;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      spPlayer.x += 6;
    }
  },
  clickWinFunct: function () {
    this.state.start('Win');
  },
  clickLoseFunct: function () {
    this.state.start('Lose');
  },
  clickPointsFunct: function () {
    console.log('pointsFun called');
    gameObj.gScore += 10;
    txScore.text = gameObj.gScore;
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