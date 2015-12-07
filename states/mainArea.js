var MainArea = function() {};

MainArea.prototype = {
    create: function() {
        this.GRID_WIDTH = 128;
        this.TILES = 1024/128;

        Save.game[Save.num].mainGrid = []

        this.buildings = [
            ["farm", 2, 2],
            ["archeryRange", 2, 1],
            ["hut", 1, 1]
        ]
        this.currentBuilding = 0

        // menu background
        game.add.tileSprite(0, 0, game.width, game.height, 'grassTile')

        // this.placingGrid = game.add.tileSprite(0, 0, game.width, game.height, 'placingGrid')
        // this.selection = game.add.sprite(0, 0, 'currentGrid')
        this.selection = game.add.graphics(0, 0)

        this.mode = "none"

        // gradient screen cover
        game.add.image(0, 0, 'cover')

        // make it not auto-pause when you unfocus it
        // game.stage.disableVisibilityChange = true;

        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.add(this.test, this)

        space = game.input.keyboard.addKey(Phaser.Keyboard.V);
        space.onDown.add(this.tolo, this)

        space = game.input.keyboard.addKey(Phaser.Keyboard.G);
        space.onDown.add(this.back, this)

        Fade.fadeOut()
    },

    modeChange: function(mode, building) {
        if (this.mode == "place") {
            this.selection.clear();
            this.building.destroy()
        }

        if (mode == "place") {
            this.selection.w = building[1]
            this.selection.h = building[2]
            this.selection.clear()
            this.selection.lineStyle(2, 0x0000FF, 1);
            this.building = game.add.sprite(0, 0, building[0])
            this.selection.drawRect(0, 0, this.selection.w*this.GRID_WIDTH, this.selection.h*this.GRID_WIDTH)
        }

        this.mode = mode
    },

    test: function() {
        this.modeChange("place", this.buildings[this.currentBuilding%3])
        this.currentBuilding += 1
    },

    back: function() {
        Fade.transition("Menu")
    },

    tolo: function() {
        this.modeChange("none")
    },

    update: function() {
        if (this.mode == "place") {
            this.selection.x = game.input.x-((this.selection.w-1)*(this.GRID_WIDTH/2))-((game.input.x-((this.selection.w-1)*(this.GRID_WIDTH/2)))%this.GRID_WIDTH);
            this.selection.y = game.input.y-((this.selection.h-1)*(this.GRID_WIDTH/2))-((game.input.y-((this.selection.h-1)*(this.GRID_WIDTH/2)))%this.GRID_WIDTH);
            this.building.x = this.selection.x;
            this.building.y = this.selection.y;
        }
    }
}