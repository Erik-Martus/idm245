gameObj.Lose = function (game) {
  var txTime;
  var txScore;
};

gameObj.Lose.prototype = {
  create: function () {
    console.log("State - Lose");

    // Add bkgr img to stage
    var spBackground = this.add.sprite(0, 0, 'background_dark');
    // ---- End bkgr img ----

    // Add scenery to stage
    var spCloud_dark01 = this.add.sprite(29, 105, 'cloud_dark01');
    var spCloud_dark02 = this.add.sprite(360, 105, 'cloud_dark02');
    var spGround = this.add.sprite(0, 900, 'ground_game');
    // ---- End scenery ----

    var spPlayer = this.add.sprite(this.world.centerX, 870, 'pl_dead');
    spPlayer.anchor.setTo(0.5, 0);

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
    var showers = "Rain Shower: 02";
    // var score = gameObj.gScore;
    // var time = gameObj.gText;

    var generalStyle = {
      fontSize: "80px",
      fill: "#ffffff",
      height: "80px",
      font: "35px Arial",
      fill: "black",
      alignment: "left"
    };

    var headerStyle = {
      fill: "#ffffff",
      font: "80px Press Start 2P",
      alignment: "left"
    };

    // Add game bar items
    var heart01 = this.add.sprite(30, 909, 'heart_empty');
    var heart02 = this.add.sprite(88, 909, 'heart_empty');
    var heart03 = this.add.sprite(146, 909, 'heart_empty');
    var txShower = this.add.text(370, 909, showers);

    // Add header text
    // txScore = this.add.text(20, 14, score, headerStyle);
    // txTime = this.add.text(526, 14, time, generalStyle);

    // Add overlay
    var overlay_bkgr = this.add.sprite(0, 0, 'background_overlay');

    // Add buttons
    var btPlay_again = this.add.button(this.world.centerX, 550, 'play-again_btn', this.clickPlayAgainFunct, this, 1, 0, 2);
    btPlay_again.anchor.setTo(0.5, 0);

    var btMenu = this.add.button(this.world.centerX, 730, 'menu_btn', this.clickMenuFunct, this, 1, 0, 2);
    btMenu.anchor.setTo(0.5, 0);

    // text
    var game_over = "GAME OVER";
    var final_score = "FINAL SCORE"
    var final_points = gameObj.gScore + " POINTS";
    var timeLeft = "TIME LEFT";
    var time = gameObj.gTime;
    var generalStyle = {
      fill: "#ffffff",
      font: "35px Press Start 2P",
      alignment: "left"
    };
    var headingStyle = {
      // fontSize: "80px",
      fill: "#ffffff",
      // height: "80px",
      font: "45px Press Start 2P",
      alignment: "left"
    };

    // create text
    var txFinal_score = this.add.text(this.world.centerX, 310, final_score, headingStyle);
    txFinal_score.anchor.setTo(0.5, 0);
    var txFinal_points = this.add.text(this.world.centerX, 360, final_points, generalStyle);
    txFinal_points.anchor.setTo(0.5, 0);
    var txTime_left = this.add.text(this.world.centerX, 430, timeLeft, headingStyle);
    txTime_left.anchor.setTo(0.5, 0);
    var txTime = this.add.text(this.world.centerX, 480, time, generalStyle);
    txTime.anchor.setTo(0.5, 0);
  },
  clickPlayAgainFunct: function () {
    gameObj.gScore = 0;
    gameObj.gTime = "01:20";
    this.state.start('Play');
  },
  clickMenuFunct: function () {
    gameObj.gScore = 0;
    gameObj.gTime = "01:20";
    this.state.start('Main');
  }
}