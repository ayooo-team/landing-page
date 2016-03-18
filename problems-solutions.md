# Problems and Solution

### Webpack setup issues

#### `'import' and 'export' may only appear at the top level`
* react-hot-loader needs to come before babel-loader

#### Webpack dev server flags
* --content-base requires the directory from which to serve files
* `--content-base=myCoolFolder/` is the same as `--content-base myCoolFolder` is also the same as `--content-base myCoolFolder/`
