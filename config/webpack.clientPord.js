const {
    appBuild
} = require('./paths');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./webpack.config');
const clientPordConfig = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    },

    module: {
        rules: [{
                test: /\.(js|jsx|mjs)$/,
                loader: require.resolve('source-map-loader'),
                enforce: 'pre',
                include: appSrc,
            },
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
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {

                            compact: true,
                        },
                    },
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(
                            Object.assign({
                                fallback: {
                                    loader: require.resolve('style-loader'),
                                    options: {
                                        hmr: false,
                                    },
                                },
                                use: [{
                                        loader: require.resolve('css-loader'),
                                        options: {
                                            importLoaders: 1,
                                            minimize: true,
                                            sourceMap: shouldUseSourceMap,
                                        },
                                    },
                                    {
                                        loader: require.resolve('postcss-loader'),
                                        options: {
                                            // Necessary for external CSS imports to work
                                            // https://github.com/facebookincubator/create-react-app/issues/2677
                                            ident: 'postcss',
                                            plugins: () => [
                                                require('postcss-flexbugs-fixes'),
                                                autoprefixer({
                                                    browsers: [
                                                        '>1%',
                                                        'last 4 versions',
                                                        'Firefox ESR',
                                                        'not ie < 9', // React doesn't support IE8 anyway
                                                    ],
                                                    flexbox: 'no-2009',
                                                }),
                                            ],
                                        },
                                    },
                                ],
                            }, )
                        ),
                        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
                    },
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },

                ]
            },

        ],
    },

}
module.exports = merge(config, clientPordConfig)