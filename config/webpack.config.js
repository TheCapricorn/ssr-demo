

module.export={
  module:{
      rules:[
        {
            test: /\.(js|jsx|mjs)$/,
            loader: require.resolve('source-map-loader'),
            enforce: 'pre',
            include: resolveApp('src'),
        },
        {
            test: /\.(js|jsx|mjs)$/,
            include:resolveApp('src') ,
            loader: require.resolve('babel-loader'),
            options: {
            compact: true,
            },
        
        },
      ],
  }
}