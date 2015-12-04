var MainArea = function() {};

MainArea.prototype = {
    create: function() {
        // menu background
        game.add.tileSprite(0, 0, game.width, game.height, 'grassTile')

        // this.placingGrid = game.add.tileSprite(0, 0, game.width, game.height, 'placingGrid')
        this.selection = game.add.sprite(0, 0, 'currentGrid')

        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        // game.stage.disableVisibilityChange = true;

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {this.selection.scale.setTo(2, 2)})

        Fade.fadeOut()
    },

    update: function() {
        this.selection.x = game.input.x - (game.input.x % 32)
        this.selection.y = game.input.y - (game.input.y % 32)
    }
}