const path = require('path');

module.exports = {
    entry: {
        "home": path.resolve(__dirname, 'src/entries/home.js'),
        "redux": path.resolve(__dirname, 'src/entries/redux.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        port: 9000
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,                
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]'
                        }
                    }                   
                ]
            }
        ]
    }
}