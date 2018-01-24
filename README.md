# Rules engine for dynamic themes

This repository provides a boilerplate that takes care of all the heavy-lifting needed by dynamic themes with setting up WebExtension listeners, hooking with other APIs, … to let you focus on the dynamic theming part.

In the `config.js` file, you will find everything you need to get started: the rules, the default theme setting, the theme definitions and some extra configuration.

In the `properties.js` file, you will be able to add new properties, that can be used in rules.

You can run the extension using the web-ext tool: `web-ext run` or by temporarily loading it into `about:debugging`.
