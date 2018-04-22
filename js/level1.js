var level1 = {
  create: function() {
    game.add.image(0, 0, 'bg');

    //loading sound for lvl1
    hitSound = game.add.audio('sound1');
    //variable stored in game.js - the only way that worked
    backgroundSound = game.add.audio('sound2');
    backgroundSound.play();
    //loop:false (arg 3) doesn't work
    winSound = game.add.audio('sound5', 0.9, false);

    //add catcher
    catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
    catcher.anchor.setTo(0.5, 0);
    game.physics.enable(catcher, Phaser.Physics.ARCADE);

    //add cat
    cat = game.add.sprite(Math.random() * game.width, Math.random() * game.height, 'cat');
    cat.anchor.setTo(0.5, 0.5);
    game.physics.enable(cat, Phaser.Physics.ARCADE);
    //activate the physics engine, enable the physics for every object that is moving

    //timer text
    text = game.add.text(400, 30, 'Time: 30', {
      font: "20px Verdana",
      fill: "#FFF"
    });
    text.anchor.setTo(0.5, 0.5);

   //updateCounter - callback function
    //had to use this.updateCounter
    game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this)

    // invoke game controls
    cursors = game.input.keyboard.createCursorKeys();


    // the textfield to display score
    scoreTxt = game.add.text(10, 10, score.toString(), styles)
    var styles = {
     font: "bold 32px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle"
    };

   //"You Win" text
    winText = game.add.text(game.width / 2 - 80, game.height / 2 - 40, '', {
       font: "bold 32px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle"
    });
  },

  updateCounter: function() {
     counter--;
     //counting down 1 sec
     text.setText('Time :' + counter);

    if (counter < 29) {
      winText.setText('You lost !');
      cat.alpha = 0.0;
      catcher.alpha = 0.0;
      text.setText('Game over');

  } else if (counter > 0 && score == 10) {
     winText.setText('You won !');
      cat.alpha = 0.0;
      catcher.alpha = 0.0;
      backgroundSound.stop();
      winSound.play();

      setTimeout(function()
      { game.state.start("menu2");
    }, 1000);
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
    game.physics.arcade.overlap(catcher, cat, this.catHitHandler);

  },

  catHitHandler: function() {
    hitSound.play();

    cat.x = Math.random() * game.width;
    cat.y = Math.random() * game.height;

    score++;
    scoreTxt.setText(score.toString());
  }
}
