var Save = {
    load: function() {
        data = localStorage.getItem("game")

        if (!data) {
            Save.game = [null, null, null]
        } else {
            Save.game = JSON.parse(data)
        }
    },

    save: function() {
        localStorage.setItem("game", JSON.stringify(Save.game))
    },
};