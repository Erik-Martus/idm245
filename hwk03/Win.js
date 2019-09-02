gameObj.Win = function (game) {
  var txScore;
  var txTime;
};

gameObj.Win.prototype = {
  create: function () {
    console.log('State - Win');
    this.stage.backgroundColor = '#5742c8';

    // Add scenery to stage
    var spCloud01 = this.add.sprite(77, 93, 'cloud01');
    var spCloud02 = this.add.sprite(509, 86, 'cloud02');
    var spSun = this.add.sprite(this.world.centerX, 70, 'sun');
    spSun.anchor.setTo(0.5, 0);
    var spGround = this.add.sprite(0, 939, 'ground_menu');

    var spPlayer = this.add.sprite(this.world.centerX, 889, 'player');
    spPlayer.anchor.setTo(0.5, 0);

    var spSurvived = this.add.sprite(this.world.centerX, 216, 'survived');
    spSurvived.anchor.setTo(0.5, 0);

    // Add buttons
    var btPlay_again = this.add.button(this.world.centerX, 550, 'play-again_btn', this.clickPlayAgainFunct, this, 1, 0, 2);
    btPlay_again.anchor.setTo(0.5, 0);

    var btMenu = this.add.button(this.world.centerX, 730, 'menu_btn', this.clickMenuFunct, this, 1, 0, 2);
    btMenu.anchor.setTo(0.5, 0);

    // text
    textScore = "SCORE: " + gameObj.gScore;
    textTime = "TIME: " + gameObj.gTime;
    var generalStyle = {
      fill: "#ffffff",
      font: "35px Press Start 2P",
      alignment: "left"
    };

    // create text
    var txScore = this.add.text(this.world.centerX, 440, textScore, generalStyle);
    txScore.anchor.setTo(0.5, 0);
    var txTime = this.add.text(this.world.centerX, 490, textTime, generalStyle);
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