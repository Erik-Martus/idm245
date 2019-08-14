gameObj.Win = function (game) { };

gameObj.Win.prototype = {
  create: function () {
    console.log('State - Win');
    // Add bkgr img to stage
    var spBackground = this.add.sprite(0, 0, 'background_light');
    // ---- End bkgr img ----

    // Add scenery to stage
    var spCloud01 = this.add.sprite(77, 93, 'cloud01');
    var spCloud02 = this.add.sprite(509, 86, 'cloud02');
    var spSun = this.add.sprite(this.world.centerX, 70, 'sun');
    spSun.anchor.setTo(0.5, 0);
    var spGround = this.add.sprite(0, 939, 'ground_menu');
    // ---- End scenery ----

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
    var textScore = "SCORE: 9999";
    var textTime = "TIME: 02:00"
    var generalStyle = {
      // fontSize: "80px",
      fill: "#ffffff",
      // height: "80px",
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
    this.state.start('Play');
  },
  clickMenuFunct: function () {
    this.state.start('Main');
  }
}