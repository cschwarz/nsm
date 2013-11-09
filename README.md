nsm - node service manager
==========================

A service manager for node which makes it easy to install node services (daemons) on windows, linux and mac.

Usage
-----

`npm install -g nsm`

A package.json with at least name, description and main is required in the service directory.

Inside the service directory use `nsm` to get a short usage description.

To install and start a service use `nsm --install` and `nsm --start`.

nsm requires root privileges on all platforms.

Credits
-------

All credit goes to [coreybutler](https://github.com/coreybutler) who has created the underlying packages ([node-windows](https://github.com/coreybutler/node-windows), [node-linux](https://github.com/coreybutler/node-linux) and [node-mac](https://github.com/coreybutler/node-mac)).
