var NewGame = function() {};

NewGame.prototype = {
    startNewFile: function(saveNum) {
        console.log("NEW SAVE FILE ", saveNum+1)
        Save.game[saveNum] = "GOOD"
    },

    newFile: [
        function() {
            this.startNewFile(0)
        },
        function() {
            this.startNewFile(1)
        },
        function() {
            this.startNewFile(2)
        }
    ],

    back: function() {
        Fade.transition("Menu")
    },

    create: function() {
        // menu background
        game.add.tileSprite(0, 0, game.width, game.height, 'grass')

        // create title
        text = game.add.text(game.width/2, 128, "NEW GAME", {
            fontSize: 100,
            boundsAlignH: 'center',
            fill: '#000000'});
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        text.anchor.setTo(0.5);

        // menu image
        menuImage = game.add.sprite(game.width/2, game.height-240, "menu");
        menuImage.anchor.setTo(0.5)

        for (var i = 0; i <= 2; i++) {
            if (Save.game[i]) {
                createButton(game.width/2, game.height-338+(i*100), "Existing File "+(i+1), this.newFile[i], this);
            } else {
                createButton(game.width/2, game.height-338+(i*100), "Blank File "+(i+1), this.newFile[i], this);
            };
        };

        // back button
        createButton(80, 40, "Back", this.back);


        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        // game.stage.disableVisibilityChange = true;

        Fade.fadeOut()

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
    }
}