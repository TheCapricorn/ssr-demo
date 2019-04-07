const {
    appBuild,
    appSrc,
    appPublicHtml,
} = require('./paths');
const fs = require('fs-extra');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const cssFilename = 'static/css/[name].[contenthash:8].css';
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
                        include: appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {

                            compact: true,
                        },
                    },
                    {
                        test: /\.css$/,
                        use:[
                            MiniCssExtractPlugin.loader,
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                 /*    minimize: true, */
                                    sourceMap: true,
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
                        ]
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
    plugins: [
        new HtmlWebpackPlugin({
            template: appPublicHtml,
        }),
        new MiniCssExtractPlugin({
            filename: cssFilename,
          }),
    ],

}

fs.emptyDirSync(appBuild);
module.exports = merge(config, clientPordConfig)