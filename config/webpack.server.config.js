const {
    appServerBuild,
    appSrc,
    appPublic,
} = require('./paths')
const fs = require('fs-extra');
const merge = require('webpack-merge');
module.exports = {
    target: "node",
    entry: './src/server/index',
    output: {
        path: appServerBuild,
        publicPath:appPublic,
    },
    module: {
        rules: [
            {
                oneOf: [{
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {

                            compact: true,
                        },
                    },
                   
                    
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },

                ]
            }
        ],
    },
}