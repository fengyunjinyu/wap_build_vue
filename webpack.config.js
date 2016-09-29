//var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: './app/index.js',
    output:{
        path:__dirname+ '/build/',
        publicPath: './app/components/',
        filename: 'bundle.js'
        //chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module:{
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"},
        ]
    },
    plugins: [commonsPlugin]
}