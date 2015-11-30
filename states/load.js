var Load = function() {};

Load.prototype = {

    preload: function() {
        game.stage.backgroundColor = 0xC2C2C2;

        text = game.add.text(game.width/2, 128, "SETTLEMENT", {
            fontSize: 100,
            boundsAlignH: 'center',
            fill: '#000000'});
        text.anchor.setTo(0.5);

        text = game.add.text(game.width/2, game.height-190, "LOADING", {
            fontSize: 50,
            boundsAlignH: 'center',
            fill: '#000000'});
        text.anchor.setTo(0.5);

        var logo = game.add.sprite(game.width/2, (game.height+115-178)/2, 'logo');
        logo.anchor.setTo(0.5);
        // logo.scale.setTo(0.9);

        var loadBack = game.add.sprite(game.width/2-(741/2), game.height-150, 'loadback');
        var loadBar = game.add.sprite(game.width/2-(741/2), game.height-150, 'loadbar');

        // this.load.setPreloadSprite(loadBar);

        game.load.script("states/menu")
        game.load.script("fade")
    }, 

    create: function() {
        game.state.add("Menu", Menu)

        text.text = "PRESS SPACE"

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
    }
}