var Menu = function() {};

Menu.prototype = {
	newGame: function() {
		Fade.transition("NewGame")
	},

	continueGame: function() {
		Fade.transition("Continue")
	},

	options: function() {
		Fade.transition("Menu")
	},

	create: function() {
		// menu background
		game.add.tileSprite(0, 0, game.width, game.height, 'grass')

		// create title
		text = game.add.text(game.width/2, 128, "MENU", {
            fontSize: 100,
            boundsAlignH: 'center',
            fill: '#000000'});
		text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        text.anchor.setTo(0.5);

        // menu image
        menuImage = game.add.sprite(game.width/2, game.height-240, "menu");
        menuImage.anchor.setTo(0.5)

        // new game button
		createButton(game.width/2, game.height-338, "New Game", this.newGame);
        // continue button, only if avalible
        if (Save.game[0] || Save.game[1] || Save.game[2]) {
			console.log("SAVE FILE EXISTS: ", Save.game)
			createButton(game.width/2, game.height-238, "Continue", this.continueGame);
		} else {
			console.log("NO SAVE FILE")
			button = createButton(game.width/2, game.height-238, "Continue", false);
			button.fill = "#484848"
		}
        // options button
		createButton(game.width/2, game.height-138, "Options", this.options);


        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        // game.stage.disableVisibilityChange = true;

        Fade.fadeOut()

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
	},

	update: function() {

	}
}