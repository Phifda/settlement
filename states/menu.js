var Menu = function() {};

Menu.prototype = {
	create: function() {
		text = game.add.text(game.width/2, 128, "MENU", {
            fontSize: 100,
            boundsAlignH: 'center',
            fill: '#000000'});
        text.anchor.setTo(0.5);

        Fade.fadeOut()
        
        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(function() {Fade.transition("Menu")})
	},

	update: function() {

	}
}