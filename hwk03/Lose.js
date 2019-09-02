gameObj.Lose = function (game) {
  var txTime;
  var txScore;
};

gameObj.Lose.prototype = {
  create: function () {
    console.log("State - Lose");
    this.stage.backgroundColor = '#333333';

    // Add buttons
    var btPlay_again = this.add.button(this.world.centerX, 550, 'play-again_btn', this.clickPlayAgainFunct, this, 1, 0, 2);
    btPlay_again.anchor.setTo(0.5, 0);

    var btMenu = this.add.button(this.world.centerX, 730, 'menu_btn', this.clickMenuFunct, this, 1, 0, 2);
    btMenu.anchor.setTo(0.5, 0);

    // text
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
      fill: "#ffffff",
      font: "45px Press Start 2P",
      alignment: "left"
    };

    // create text
    var spGame_over = this.add.sprite(this.world.centerX, 120, 'game_over');
    spGame_over.anchor.setTo(0.5, 0);
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
    gameObj.gTime = "02:00";
    this.state.start('Play');
  },
  clickMenuFunct: function () {
    gameObj.gScore = 0;
    gameObj.gTime = "02:00";
    this.state.start('Main');
  }
}