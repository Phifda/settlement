createButton = function(x, y, text, click, domain) {
    if (domain) {
    }
    button = game.add.text(x, y, text, {
        fontSize: 48,
        boundsAlignH: 'center',
        fill: '#000000'});
    button.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    button.anchor.setTo(0.5);
    if (click) {
        button.inputEnabled = true;
        button.events.onInputUp.addOnce(click, domain);
        button.events.onInputOver.add(function() {
            this.fill = '#A50000';
            this.fontSize = 52;
        }, button)
        button.events.onInputOut.add(function() {
            this.fill = '#000000';
            this.fontSize = 48;
        }, button)
    };

    return button;
}