var os = require('os');
var npm = require('npm');

if (os.platform() === 'win32') {
    npm.load({}, function (err) {
        if (err)
            return console.log(err);
        npm.commands.install(['node-windows'], function(err) {
            if (err)
                console.log(err);
        });
    });
}
