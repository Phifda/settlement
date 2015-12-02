var MainArea = function() {};

MainArea.prototype = {
    create: function() {
        // menu background
        game.add.tileSprite(0, 0, game.width, game.height, 'grassTile')

        this.placingGrid = game.add.tileSprite(0, 0, game.width, game.height, 'placingGrid')

        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        // game.stage.disableVisibilityChange = true;

        Fade.fadeOut()
    }
}