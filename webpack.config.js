const path = require('path');


module.exports = {
    entry: {
        index: './src/pages/Index.jsx', 
        // Add more files here... 
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: '[name].js',
        // When it encounters an asset file, it will place it in the public/dist/assets/ with the following format name.extension
        assetModuleFilename: 'assets/[name][ext]'
    }, 
    resolve: {
        // How to handle files with these extensions
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                // When we encounter a js or jsx file, we want to use the babel-loader to bundle the code
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        // Defines what options to use for the babel-loader with the right being applied first, then the left
                        presets: ['@babel/preset-env', '@babel/preset-react'], 
                    }
                }
            }, 
            {
                // How to handle css files when encountered
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                // How to handle pictures when encountered
                test: /\.(png|jpe?g|webp)$/i,
                // Type asset/resource tells Webpack that this is a resource and to store it to the output specified in output.assetModuleFilename
                type: 'asset/resource', 
            }
        ]
    }

}