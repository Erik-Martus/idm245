gameObj.Play = function (game) {
  // Make local/global vars for all functions in this js file
  var txScore; // this line is not necessary
  var timerObj; // timer object
  var timerSeconds; // current timer seconds
  var txTime; // also not necessary (apparently)
};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');

    //Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    spBackground.anchor.setTo(0.5, 0.5);

    // Add walking mummy
    var sMummy = this.add.sprite(300, 200, 'mummy');
    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = sMummy.animations.add('walk');
    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    sMummy.animations.play('walk', 30, true);

    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
    var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);
    var btPoints = this.add.button(210, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

    //Add text
    var scoreStr = gameObj.gScore;
    var timeStr = gameObj.gTime;

    txScore = this.add.text(25, 15, scoreStr);
    txTime = this.add.text(this.world.width - 115, 15, timeStr);

    txScore.fill = 'black';
    txScore.font = 'Zilla Slab';
    txScore.fontSize = 36;

    txTime.fill = 'black';
    txTime.font = 'Zilla Slab';
    txTime.fontSize = 36;

    timerSeconds = 70; // 1:10 = 70 seconds
    timerObj = this.time.create(false);
    timerObj.loop(1000, this.updateTimerFun, this); // iteration time in ms, fuction called, "this object"
    timerObj.start();
  },
  winnerFun: function () {
    console.log('winnerFun called');
    this.state.start('Winner');
  },
  loserFun: function () {
    console.log('loserFun called');
    this.state.start('Loser');
  },
  pointsFun: function () {
    console.log('pointsFun called');
    gameObj.gScore += 10;
    txScore.text = gameObj.gScore;
  },
  updateTimerFun: function () {
    timerSeconds--;
    // txTime.text = timerSeconds;
    displayMin = Math.floor(timerSeconds / 60);
    displaySec = Math.floor(timerSeconds) % 60;
    if (displayMin < 10) {
      displayMin = "0" + displayMin;
    }
    if (displaySec < 10) {
      displaySec = "0" + displaySec;
    }

    gameObj.gTime = displayMin + ":" + displaySec;
    txTime.text = gameObj.gTime;
  }
};
