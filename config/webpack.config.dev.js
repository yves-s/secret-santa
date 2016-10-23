var paths = require('./paths');

var publicPath = '/';

module.exports = {
    entry: '../src/index.js',
    output: {
        path: paths.appBuild,
        filename: 'static/js/bundle.js',
        publicPath: publicPath
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: paths.appNodeModules,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}