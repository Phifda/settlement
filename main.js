var game = new Phaser.Game(1024, 1024, Phaser.AUTO);

var Start = function(){};
Start.prototype = {
    preload: function() {
        game.load.image('loadbar', 'assets/bad-loadbar.png')
        game.load.image('loadback', 'assets/bad-loadback.png')
        game.load.image('logo', 'assets/logo.png')
        game.load.script('loading', 'states/load.js')
    },

    create: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;

        game.state.add("Load", Load)
        game.state.start("Load")
    }
};

game.state.add("Start", Start)
game.state.start("Start")