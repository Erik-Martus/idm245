// this file is a predetermined file for loading global variables, file MUST be named Boot
var gameObj = {
  // Global variables are decleared here!
  gScore: 0,
  gTime: "01:20"
  // When you change this to 02:00 make sure to change it in Lose.js and Win.js
};

gameObj.Boot = function (game) {};

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