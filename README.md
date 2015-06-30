# My personal Cordova/Phonegap hooks

That's a collection of Cordova hooks I use.

It is needed to install the packages listed on `package.json` and add the hooks on your `config.xml`.

Example:

```xml
  <hook src="scripts/compile_js.js" type="before_compile" />
```