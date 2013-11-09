#! /usr/bin/env node

var optimist = require('optimist');
var Service = require('./service');

var argv = optimist
    .usage('Manage node services.\nUsage: $0')
    .describe('install', 'Install a service')
    .describe('uninstall', 'Uninstall a service')
    .describe('start', 'Start a service')
    .describe('stop', 'Stop a service')
    .describe('restart', 'Restart a service')
    .argv;

var service = Service.create();

if (argv.install)
    service.install();
else if (argv.uninstall)
    service.uninstall();
else if (argv.start)
    service.start();
else if (argv.stop)
    service.stop();
else if (argv.restart)
    service.restart();
else
    optimist.showHelp();