

module.exports={
    mode:"development",
    entry:'./src/client/index',
    output:{
        filename:"[name].js",
        path:__dirname+'/dist',
    },
}