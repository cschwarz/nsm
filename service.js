var os = require('os');
var path = require('path');

var platform = os.platform();

var Service;

if (platform === 'win32')
    Service = require('node-windows').Service;
else if (platform === 'linux')
    Service = require('node-linux').Service;
else if (platform === 'darwin')
    Service = require('node-mac').Service;
else
    throw new Error('Platform \'' + platform + '\' is not supported');

Service.create = function (argv) {
    var package = require(path.join(process.cwd(), './package.json'));

    var env = Object.keys(argv.env || {}).map(function (key) {
        return { name: key, value: argv.env[key] };
    });

    var options = {
        name: argv.name || package.name,
        description: argv.description || package.description,
        script: argv.script || package.main,
        logmode: argv.logmode,
        env: env
    };

    var service = new Service(options);

    return service;
};

module.exports = Service;