nsm - node service manager
==========================

A service manager for [node](http://nodejs.org) which makes it easy to install node.js modules as native services (daemons) on Windows, Linux and OS X.

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

Troubleshooting
---------------

###Windows

```
Error: Cannot find module 'npm'
```

Add NODE_PATH (e.g.: C:\Program Files\nodejs\node_modules) to your environment variables.

###Linux and OS X

```
npm ERR! Error: EACCES, open '*.lock'
```

Have a look at http://howtonode.org/introduction-to-npm which suggests to set your user account as the owner of /usr/local:

```
sudo chown -R $USER /usr/local
```

Credits
-------

All credit goes to [coreybutler](https://github.com/coreybutler) who has created the underlying packages ([node-windows](https://github.com/coreybutler/node-windows), [node-linux](https://github.com/coreybutler/node-linux) and [node-mac](https://github.com/coreybutler/node-mac)).
