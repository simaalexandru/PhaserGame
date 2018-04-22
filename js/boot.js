var boot = {
    preload: function() {
        //loading  bg,sprites & sound
        game.load.image('bg', 'images/bg.png');
        game.load.image('button', 'images/button.png');
        game.load.image('cat', 'images/cat.png');
        game.load.spritesheet('catcher', 'images/catcher.png');

        game.load.image('bg2', 'images/bg2.jpg');
        game.load.spritesheet('blackpanther', 'images/pantera.png');

        //hit1
        game.load.audio('sound1', 'audio/sound1.mp3');
        //bg1
      	game.load.audio('sound2', 'audio/sound2.mp3');
        //bg2
        game.load.audio('sound3', 'audio/sound3.mp3');
        //hit2
        game.load.audio('sound4', 'audio/sound4.mp3');
        //win
        game.load.audio('sound5', 'audio/sound5.mp3');

    },
    create: function() {
        game.state.start('menu1')
    }
}
