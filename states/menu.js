var Menu = function() {};

Menu.prototype = {
	newGame: function() {
		console.log("New Game")
		Fade.transition("Menu")
	},

	continueGame: function() {
		console.log("Continue")
		Fade.transition("Menu")
	},

	options: function() {
		console.log("Options")
		Fade.transition("Menu")
	},

	createButton: function(x, y, text, click) {
		button = game.add.text(x, y, text, {
            fontSize: 48,
            boundsAlignH: 'center',
            fill: '#000000'});
		button.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        button.anchor.setTo(0.5);
        button.inputEnabled = true;
        button.events.onInputUp.addOnce(click);
        button.events.onInputOver.add(function() {
			this.fill = '#212121';
			this.fontSize = 52;
        }, button)
        button.events.onInputOut.add(function() {
			this.fill = '#000000';
			this.fontSize = 48;
        }, button)

        return button;
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

        // new game button
		this.createButton(game.width/2, game.height-300, "New Game", this.newGame);
        // continue button
		this.createButton(game.width/2, game.height-240, "Continue", this.continueGame);
        // options button
		this.createButton(game.width/2, game.height-180, "Options", this.options);


        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        game.stage.disableVisibilityChange = true;

        Fade.fadeOut()

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
	},

	update: function() {

	}
}