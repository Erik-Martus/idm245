gameObj.Help = function (game) { };

gameObj.Help.prototype = {
  create: function () {
    console.log('State - Help');
    this.stage.backgroundColor = '#333333';

    // Help info
    var txHow_to = this.add.sprite(this.world.centerX, 30, 'instructions');
    txHow_to.anchor.setTo(0.5, 0);

    // Add buttons
    var btBack = this.add.button(this.world.centerX, 880, 'back_btn', this.clickBackFunct, this, 1, 0, 2);
    btBack.anchor.setTo(0.5, 0);
  },
  clickBackFunct: function () {
    this.state.start('Main');
  }
}