gameObj.Play = function (game) { };

gameObj.Play.prototype = {
  create: function () {
    console.log("State - Play")
    this.stage.backgroundColor = '#330099';

    // Add bkgr img to stage
    var spBackground = this.add.sprite(0, 0, 'background_dark');
    // ---- End bkgr img ----

    // Add scenery to stage
    var spCloud_dark01 = this.add.sprite(29, 105, 'cloud_dark01');
    var spCloud_dark02 = this.add.sprite(360, 105, 'cloud_dark02');
    var spGround = this.add.sprite(0, 900, 'ground_game');
    // ---- End scenery ----

    var spPlayer = this.add.sprite(this.world.centerX, 850, 'pl_dark');
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
    var score = "Score: 100";
    var time = "01:15";

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
    var heart01 = this.add.sprite(30, 909, 'heart_full');
    var heart02 = this.add.sprite(88, 909, 'heart_empty');
    var heart03 = this.add.sprite(146, 909, 'heart_empty');
    var txShower = this.add.text(400, 920, showers, gameBarStyle);

    // Add header text
    var txScore = this.add.text(20, 14, score, headerStyle);
    var txTime = this.add.text(526, 14, time, headerStyle);

    // Add temp buttons
    var btWin = this.add.button(20, 800, 'btn_win', this.clickWinFunct, this, 1, 0, 2);
    var btLose = this.add.button(130, 800, 'btn_lose', this.clickLoseFunct, this, 1, 0, 2);
  },
  clickWinFunct: function () {
    this.state.start('Win');
  },
  clickLoseFunct: function () {
    this.state.start('Lose');
  }
}