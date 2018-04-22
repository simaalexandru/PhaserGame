var level2 = {
    create: function() {
	   game.add.image(0, 0, 'bg2');

     hitSound = game.add.audio('sound4');
     backgroundSound2 = game.add.audio('sound3');
     backgroundSound2.play();
     winSound = game.add.audio('sound5', 0.9, false);

     //catcher
     catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
     catcher.anchor.setTo(0.5, 0);
     game.physics.enable(catcher, Phaser.Physics.ARCADE);

     //panther
     blackpanther = game.add.sprite( 600, 20, 'blackpanther');
     blackpanther.anchor.setTo(0.5, 0);

     game.physics.enable(blackpanther, Phaser.Physics.ARCADE);


     //timer text
     text = game.add.text(400, 30, 'Time: 20', {
       font: "20px Verdana",
       fill: "#FFF"
     });
     text.anchor.setTo(0.5, 0.5);
   //updateCounter - callback function
     //had to use "this"
     game.time.events.loop(Phaser.Timer.SECOND, this.Counter, this);

     // invoke game controls
     cursors = game.input.keyboard.createCursorKeys();



     // the textfield to display score
     scoreTxt = game.add.text(10, 10, score.toString(), styles)
     var styles = {
       font: '20px Verdana',
       fill: '#FFF'
     };

    //"You Win" text
     winText = game.add.text(game.width/2 - 80, game.height/2 - 40, '', {
        font: "bold 32px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle"
     });

     //had to set the counter again, for level2
     //otherwise, the setTimeout function will delay the counter for level2 with 2 seconds
      counter= 20;
    },

     Counter: function() {
       counter--;
       text.setText('Time : ' + counter);

      if (counter < 0 && score >= 0) {
         winText.setText('You lost !');
         cat.alpha = 0.0;
         catcher.alpha = 0.0;
         text.destroy();
         scoreTxt.destroy();
     } else if (counter > 0 && score == 20) {
        winText.setText('You won !');
        winSound.play();
        //hide the sprites
        catcher.alpha = 0.0;
        blackpanther.alpha = 0.0;
        backgroundSound2.stop();
        //remove counter
        scoreTxt.destroy();
      }
    },


  update: function() {
    // run the game loop
    if (cursors.left.isDown && catcher.x > 20) {
      catcher.x -= 5;
      // scaling 100%, pointing at the original direction
      catcher.scale.x = 1;
    }
    if (cursors.right.isDown && catcher.x < game.width - 20) {
      catcher.x += 5;
      // scaling 100%, pointing at the opposite direction
      catcher.scale.x = -1;
    }
    if (cursors.up.isDown && catcher.y > 10) {
      catcher.y -= 5;
    }
    if (cursors.down.isDown && catcher.y < game.height - 40) {
      catcher.y += 5;
    }

    // implementing HitTest:
    // arguments: objects, callback function
    game.physics.arcade.overlap(catcher, blackpanther, this.pantherHitHandler);

      //moving the panther
      blackpanther.x += 0.7;

      //if panther leaves the stage, replace it randomly
      //game.width +40 , so the panther leaves the stage and then respawn
      if(blackpanther.x > game.width + 40 &&  blackpanther.x > game.height + 40 ){
        blackpanther.x = Math.random() * game.width;
        blackpanther.y = Math.random() * game.height;
      }

  },

    pantherHitHandler: function() {
    hitSound.play();

    //randomly respawn the cat
    blackpanther.x = Math.random() * game.width;
    blackpanther.y = Math.random() * game.height;

    score++;
    scoreTxt.setText(score.toString());
  }

}
