var os = require('os');
var npm = require('npm');

var platform = os.platform();

var package;

if (platform === 'win32')
    package = 'node-windows';
else if (platform === 'linux')
    package = 'node-linux';
else if (platform === 'darwin')
    package = 'node-mac';
else
    return 'Platform \'' + platform + '\' is not supported';

npm.load({}, function (err) {
    if (err)
        return console.log(err);
    npm.commands.install([package], function(err) {
        if (err)
            console.log(err);
    });
});