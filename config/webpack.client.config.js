
const path = require('path');
const merge = require('webpack-merge');
const webpackConfig= require('./webpack.config');
const config={
    mode:"development",
    entry:'./src/client/index',
    output:{
        filename:"[name].js",
        path:path.join(__dirname,'/dist'),
    },
    devServer:{
        port:3000,
        contentBase:path.join(__dirname,'/dist'),
        compress: true,
    },
    
}
module.exports=merge(config,webpackConfig)