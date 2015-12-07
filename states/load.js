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

        this.load.setPreloadSprite(loadBar);

        game.load.script("states/menu")
        game.load.script("states/continue")
        game.load.script("states/newGame")
        game.load.script("states/mainArea")
        game.load.script("fade")
        game.load.script("save")
        game.load.script("createButton")
        game.load.image("grass", "assets/grass.png")
        game.load.image("grassTile", "assets/grassTile.png")
        game.load.image("placingGrid", "assets/placingGrid.png")
        game.load.image("currentGrid", "assets/currentGrid.png")
        game.load.image("menu", "assets/menu.png")
        game.load.image("cover", "assets/cover.png")

        this.buildings = [
            "farm",
            "archeryRange",
            "hut"
        ]

        for (var i = this.buildings.length - 1; i >= 0; i--) {
            game.load.image(this.buildings[i], "assets/"+this.buildings[i]+".png")
        };
    }, 

    create: function() {
        game.state.add("Menu", Menu)
        game.state.add("NewGame", NewGame)
        game.state.add("MainArea", MainArea)
        game.state.add("Continue", Continue)

        text.text = "PRESS SPACE"

        Save.load();
        Save.game = [null, null, null]
        // Save.save();

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
    }
}