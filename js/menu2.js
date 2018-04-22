var menu2 = {
    create: function() {
        game.add.image(0, 0, 'bg2');

        //play button, actionOnClick
        button = game.add.button(game.world.centerX - 115, 350, 'button', this.actionOnClick, this, 2, 1, 0);

        //text bar
        var bar = game.add.graphics();
        bar.beginFill(0x000000, 0.2);
        bar.drawRect(0, 190, 800, 130);

        var style = { font: "bold 30px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle" };
        var style2 = { font: "20px Verdana", fill: "#e1e9b9", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "Feline Catcher", style);
        //  x=0, y=90, 800px wide, 100px high
        text.setTextBounds(0, 90, 800, 100);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        text2 = game.add.text(0, 0, "Level 2", style);
        text2.setTextBounds(0, 190, 800, 100);

       //instructions
        text3 = game.add.text(0, 0, "Move the catcher with the arrow keys and catch 10 panthers in 20 seconds.", style2);
        text3.setTextBounds(0, 230, 800, 100);
      },

      actionOnClick : function() {
        game.state.start("level2");
      }
    }
