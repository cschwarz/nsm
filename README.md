nsm - node service manager
==========================

A service manager for [node](http://nodejs.org) which makes it easy to install node.js modules as native services (daemons) on Windows, Linux and OS X.

If an installed service fails or the system has been rebooted, the service will be automatically restarted.

Usage
-----

```
npm install -g nsm
```

A package.json with at least *name*, *description* and *main* is required in the service directory.

Inside the service directory use `nsm` to get a short usage description.

To install and start a service use:

```
nsm --install
nsm --start
```

nsm requires root privileges on all platforms.

## Change name/description/script/environment variables

```
nsm --install --name=anothername --script=src/server.js --env.NODE_ENV=production
nsm --start --name=anothername
```


Example
-------

This example will show you how to install a simple hello world service which crashes after a configurable amount of time.

Following parameters can be configured in config.json:

- port [8000]: port on which the service will listen
- failAfter [45]: amount of time after which the service will throw an unhanded exception (optional)

Create a new directory named *services* (e.g.: in your home directory).

```
mkdir services
cd services
```

Install sample service which can be found here: [nsm-sample-service](https://npmjs.org/package/nsm-sample-service)

```
npm install nsm-sample-service
```

Move into installed sample service directory.

```
cd node_modules/nsm-sample-service
```

Install and start the service.

```
sudo nsm --install
sudo nsm --start
```

Go to http://localhost:8000 to check whether the service runs. It should report the current uptime and fail after 45 seconds in the default configuration.

After a short amount of time it should be automatically restarted.

If you make changes to your config.json you need to restart the service.

```
sudo nsm --restart
```

Troubleshooting
---------------

###Windows

```
Error: Cannot find module 'npm'
```

Add NODE_PATH (e.g.: C:\Program Files\nodejs\node_modules) to your environment variables.

Credits
-------

All credit goes to [coreybutler](https://github.com/coreybutler) who has created the underlying packages ([node-windows](https://github.com/coreybutler/node-windows), [node-linux](https://github.com/coreybutler/node-linux) and [node-mac](https://github.com/coreybutler/node-mac)).
