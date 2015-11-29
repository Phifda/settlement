var game = new Phaser.Game(1024, 1024, Phaser.AUTO);

main = {};

main.menu = function(){};
main.menu.prototype = {
    preload: function() {

    },

    create: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;

        game.stage.backgroundColor = 0x000041;

        text = game.add.text(0, 0, "Donger Defence", {
            fontSize: 128,
            boundsAlignH: 'center',
            boundsAlignV: 'center',
            fill: '#FF19EC'
        });
        text.setTextBounds(0, 0, game.width, game.height);

        text = game.add.text(0, game.height/3*2, "press space to start", {
            fontSize: 28,
            boundsAlignH: 'center',
            boundsAlignV: 'center',
            fill: '#FF19EC'
        });
        text.setTextBounds(0, 0, game.width, game.height);

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if (space.isDown) {
            // PENIENEE
        }
    }
};

game.state.add("Menu", main.menu)
game.state.start("Menu")