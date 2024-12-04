const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
    // Production Configuration
    mode: 'production', 
    watch: false, 
    output: {
        // Tells Webpack to serve / look for the generated files relative to the HTML page
        publicPath: './dist/', 
        // Deletes the previous code bundles before regenerating them
        clean: true,
    }
})