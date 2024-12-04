const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
    // Development configuration
    mode: 'development', 
    output: {
        // Tells Webpack where to serve and find the files
        publicPath: '/dist/'
    }, 
    devServer: {
        // Immediately upon starting the server, opens up a browser
        open: true, 
        // What port to run the server on
        port: 5500, 
        // Disabled so that liveReload can take effect, you can learn more about Hot Module Replacement (HMR) by going to the Webpack Documentation 
        hot: false, 
        liveReload: true, 
        // Make it so that the server is accessible externally. This is actually useful if you want to dockerize your application
        host: '0.0.0.0', 
    }
})