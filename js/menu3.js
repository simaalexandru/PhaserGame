var menu3 = {
    create: function() {
        game.add.image(0, 0, 'bg2');

        //play button, actionOnClick
        button = game.add.button(game.world.centerX - 115, 350, 'button', this.actionOnClick, this, 2, 1, 0);

        var style = { font: "bold 30px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "Congratulations, you won!", style);
        //  x=0, y=90, 800px wide, 100px high
        text.setTextBounds(0, 200, 800, 100);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        
        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "Do you want to play again?", style);
        //  x=0, y=90, 800px wide, 100px high
        text.setTextBounds(0, 250, 800, 100);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        
  
        
      },

      actionOnClick : function() {
        window.location.reload()
      }
    }
