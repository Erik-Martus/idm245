gameObj.Main = function (game) { };

gameObj.Main.prototype = {
  create: function () {
    console.log("State - Main");
    this.stage.backgroundColor = '#5742c8';

    // Add scenery to stage
    var spCloud01 = this.add.sprite(77, 93, 'cloud01');
    var spCloud02 = this.add.sprite(509, 86, 'cloud02');
    var spSun = this.add.sprite(this.world.centerX, 70, 'sun');
    spSun.anchor.setTo(0.5, 0);
    var spGround = this.add.sprite(0, 939, 'ground_menu');
    // ---- End scenery ----

    var spTitle = this.add.sprite(this.world.centerX, 260, 'title');
    spTitle.anchor.setTo(0.5, 0);
    var spPlayer = this.add.sprite(this.world.centerX, 889, 'player');
    spPlayer.anchor.setTo(0.5, 0);

    // Add buttons
    var btPlay = this.add.button(this.world.centerX, 405, 'play_btn', this.clickPlayFunct, this, 1, 0, 2);
    btPlay.anchor.setTo(0.5, 0);
    this.btAudio = this.add.button(630, -5, 'music_btn', this.clickAudioFunct, this);
    this.btAudio.frame = 1
    this.btAudio.scale.setTo(0.75, 0.75);
    console.log(gameObj.music);

    var btHelp = this.add.button(this.world.centerX, 580, 'help_btn', this.clickHelpFunct, this, 1, 0, 2);
    btHelp.anchor.setTo(0.5, 0);
  },
  clickPlayFunct: function () {
    this.state.start('Play');
  },
  clickHelpFunct: function () {
    this.state.start('Help');
  },
  clickAudioFunct: function () {
    if (this.btAudio.frame == 0) {
      this.btAudio.frame = 1;
      gameObj.music = false;
    } else {
      this.btAudio.frame = 0;
      gameObj.music = true;
    }
    console.log(gameObj.music)
  }
}