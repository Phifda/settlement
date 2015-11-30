var Load = function() {};

Load.prototype = {
	preload: function() {
		game.stage.backgroundColor = 0xC2C2C2;

		var text = game.add.text(game.width/2, game.height/3, "Donger Defence", {
            fontSize: 100,
            boundsAlignH: 'center',
        	fill: '#FF0000'});
		text.anchor.setTo(0.5)

		text = game.add.text(game.width/2, game.height/2, "Loading...", {
            fontSize: 64,
            boundsAlignH: 'center',
        	fill: '#FF0000'});
		text.anchor.setTo(0.5)

		var loadBack = game.add.sprite(game.width/2-(741/2), game.height-150, 'loadback');
		var loadBar = game.add.sprite(game.width/2-(741/2), game.height-150, 'loadbar');

		// this.load.setPreloadSprite(loadBar);

		game.load.image("no", "assets/loadbar.png")
	}, 

	create: function() {
		console.log('done')
	},
}