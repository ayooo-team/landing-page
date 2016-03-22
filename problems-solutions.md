# Problems and Solution

### Webpack setup issues

#### `'import' and 'export' may only appear at the top level`
* react-hot-loader needs to come before babel-loader

#### Webpack dev server flags
* --content-base requires the directory from which to serve files
* `--content-base=myCoolFolder/` is the same as `--content-base myCoolFolder` is also the same as `--content-base myCoolFolder/`
* `--inline` embeds the webpack-dev-server runtime to the bundle.js
* `--hot` adds the HotModuleReplacementPlugin
* `--watch` watches for changes to files to be bundled

👻 `--hot --inline` adds the webpack/hot/dev-server into the webpack config `entry`

* Ref: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli

#### Setting up Hot Module Replacement (HMR)
* HMR requires a webpack-dev-server
* There are multiple ways of setting up webpack-dev-server
* (Method 1) webpack-dev-server CLI - run webpack-dev-server on CLI with the flags above
    * Currently unsupported by webpack-dev-server version 1.14.1
    * To use this method, downgrade to version 1.14.0
    * See https://github.com/webpack/webpack-dev-server/issues/367
* (Method 2) webpack-dev-server API - write the server into your codebase and run
* (Method 3) webpack-hot-middleware - use only if you have an existing express server
* Ref: http://andrewhfarmer.com/webpack-hmr-tutorial/

#### importing .json files
* install the `json-loader` as a dev-dependency.
* prepend `json!` in front of the path to the .json file and import as normal.
```javascript
import data from 'json!../../../data/info-block-data.json';
```

#### Generating components from an array
* A warning message will be received:
```
Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `InfoContainer`. See https://fb.me/react-warning-keys for more information.
```
* This occurs because each component that is generated from mapping an array requires a unique id, as this is the way that React keeps track of what to render.
