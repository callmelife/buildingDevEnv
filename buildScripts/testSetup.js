// This file isnt transpilied, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Moch doesnt understand
require.extensions['.css'] = function() {};
