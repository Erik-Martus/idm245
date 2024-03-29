gameObj.Preloader = function (game) { };

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor = '#5742c8';

    // Progress bar animation
    this.preloadText = this.add.sprite(this.world.centerX, 410, 'preloaderText');
    this.preloadText.anchor.setTo(0.5, 0.5);

    this.preloadOutline = this.add.sprite((720 - 248) / 2, (960 - 52) / 2, 'preloaderOutline');

    this.preloadBar = this.add.sprite((720 - 236) / 2, (960 - 40) / 2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    // Load Google WebFont Loader script
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


    // load button assets
    this.load.spritesheet('back_btn', 'img/button/back_button.png', 223, 79);
    this.load.spritesheet('help_btn', 'img/button/help_button.png', 312, 152);
    this.load.spritesheet('menu_btn', 'img/button/menu_button.png', 356, 152);
    this.load.spritesheet('play_btn', 'img/button/play_button.png', 356, 170);
    this.load.spritesheet('play-again_btn', 'img/button/play-again_button.png', 654, 170);
    this.load.spritesheet('points_btn', 'img/button/points_button.png', 220, 81, 4);
    this.load.spritesheet('music_btn', 'img/button/audio_button.png', 128, 128)

    // load help assets
    this.load.image('instructions', 'img/help/how_to_play.png')

    // load icon imgs
    this.load.spritesheet('icon_heat-wave', 'img/icon/icon_heat-wave.png', 56, 56);
    this.load.spritesheet('icon_umbrella', 'img/icon/icon_umbrella.png', 56, 56);
    this.load.image('p-u_heat-wave', 'img/icon/power-up_heat-wave.png');
    this.load.image('p-u_umbrella', 'img/icon/power-up_umbrella.png');
    this.load.image('raindrop', 'img/icon/rain-drop.png');
    this.load.spritesheet('hearts', 'img/icon/hearts.png', 184, 61);


    // load player assets
    this.load.image('pl_dead', 'img/player/player_broken.png');
    this.load.image('pl_dark', 'img/player/player_dark.png');
    this.load.image('player', 'img/player/player.png');

    // load scenery imgs
    this.load.image('cloud01', 'img/scenery/cloud_01.png');
    this.load.image('cloud02', 'img/scenery/cloud_02.png');
    this.load.image('cloud_dark01', 'img/scenery/cloud_dark_01.png');
    this.load.image('cloud_dark02', 'img/scenery/cloud_dark_02.png');
    this.load.image('ground_game', 'img/scenery/ground_game.png');
    this.load.image('ground_menu', 'img/scenery/ground_menu.png');
    this.load.image('sun', 'img/scenery/sun.png');

    // load other imgs
    this.load.image('title', 'img/rainfall_title.png');
    this.load.image('survived', 'img/you_survived.png');
    this.load.image('game_over', 'img/game_over.png')

    // load audio
    this.load.audio('music', 'audio/talkToMe.mp3');
    this.load.audio('easter', 'audio/easterEgg.mp3');
    this.load.audio('hit', 'audio/hit.mp3');

  }, // end Preload

  create: function () {
    this.state.start('Main');
  }
}; // end gameObj.Preloader.prototype