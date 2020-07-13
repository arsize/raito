var figlet = require('figlet');

function text(text) {
    figlet(text, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

module.exports = text