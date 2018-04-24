game = new Phaser.Game(800, 600, Phaser.CANVAS, "game"),

score = 0;
counter=30;
var  backgroundSound, backgroundSound2,winSound;

//adding all the states to the game
game.state.add("boot", boot),
game.state.add("menu1", menu1),
game.state.add("level1", level1),
game.state.add("menu2", menu2),
game.state.add("level2", level2),
game.state.add("menu3", menu3),
game.state.start("boot")
