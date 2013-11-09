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

Service.create = function () {
    var package = require(path.join(process.cwd(), './package.json'));

    var service = new Service({
        name: package.name,
        description: package.description,
        script: package.main
    });

    return service;
};

module.exports = Service;