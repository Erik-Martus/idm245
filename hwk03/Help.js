gameObj.Help = function (game) { };

gameObj.Help.prototype = {
  create: function () {
    console.log('State - Help');
    this.stage.backgroundColor = '#333333';

    // Help info
    var spHow_to = this.add.sprite(this.world.centerX, 85, 'how-to-play');
    spHow_to.anchor.setTo(0.5, 0);

    var spInst = this.add.sprite(this.world.centerX, 172, 'instructions');
    spInst.anchor.setTo(0.5, 0);

    var spInst_pu = this.add.sprite(this.world.centerX, 404, 'instructions_powerups');
    spInst_pu.anchor.setTo(0.5, 0);

    var spScoring = this.add.sprite(this.world.centerX, 652, 'scoring');
    spScoring.anchor.setTo(0.5, 0);

    var spControls = this.add.sprite(this.world.centerX, 744, 'controls');
    spControls.anchor.setTo(0.5, 0);

    // Add buttons
    var btBack = this.add.button(18, 14, 'back_btn', this.clickBackFunct, this, 1, 0, 2);
  },
  clickBackFunct: function () {
    this.state.start('Main');
  }
}