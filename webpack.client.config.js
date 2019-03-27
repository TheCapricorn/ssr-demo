
const path = require('path');
module.exports={
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