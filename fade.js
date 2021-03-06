Fade = {
    fadeColor: "#000000",
    nextState: "",

    changeState: function () 
    {
        game.state.start(Fade.nextState);
        // Fade.fadeOut();
    },

    transition: function (nextState) {
        graphics = game.add.graphics(0, 0);
        graphics.beginFill(Fade.fadeColor, 1);
        graphics.drawRect(0, 0, game.width, game.height);
        graphics.alpha = 0;
        graphics.endFill();

        Fade.nextState = nextState;

        s = game.add.tween(graphics)
        s.to({ alpha: 1 }, 200, null)
        s.onComplete.add(Fade.changeState)
        s.start();
    },

    fadeOut: function () {
        raphics = game.add.graphics(0, 0);
        raphics.beginFill(Fade.fadeColor, 1);
        raphics.drawRect(0, 0, game.width, game.height);
        raphics.alpha = 1;
        raphics.endFill();

        s = game.add.tween(raphics)
        s.to({ alpha: 0 }, 200, null)
        s.start();
    }
}