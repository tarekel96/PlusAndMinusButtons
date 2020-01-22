// progress bar package
let ProgressBar = require('progressbar.js');

window.onload = function onLoad() {
    let circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    circle.animate(1);
};

module.export = Circle;