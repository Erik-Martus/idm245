// this file is a predetermined file for loading global variables, file MUST be named Boot
var gameObj = {
  // Global variables are decleared here!
  gScore: 100,
  gTime: "00:00"
};

gameObj.Boot = function (game) { };

gameObj.Boot.prototype = {
  preload: function () {
    console.log("State - Boot");
    this.load.image('preloaderText', 'img/load/loading_text.png');
    this.load.image('preloaderOutline', 'img/load/loading_outline.png');
    this.load.image('preloaderBar', 'img/load/loading_bar.png');
  },
  create: function () {
    this.state.start('Preloader');
  }
};
