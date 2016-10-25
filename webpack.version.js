/**
 * 版本发布工具
 * 稳定版本使用该配置文件发布
 * @type {*|Object}
 */
var path = require('path');
var AssetsPlugin = require("assets-webpack-plugin");
var assetsPluginInstance = new AssetsPlugin();
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var packCSS = new ExtractTextPlugin('./build/css/[name].min.css');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: './app/index.js',
    output:{
        path:path.join(__dirname,'build/assets'),
        //path:path.join(__dirname,'build/assets','[hash]'),
        //publicPath: './app/components/',
        filename: 'bundle.[hash].js',
        chunkFilename: '[id].[chunkhash].js'
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
            {
                test: /\.(jpg|png|svg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack'
                ]
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader")
            }
        ]
    },
    plugins: [commonsPlugin ,
        assetsPluginInstance,
        new ExtractTextPlugin("[name].css" , {allChunks: true}),
        new HtmlWebpackPlugin({
            filename:'app.html',    //生成的html存放路径，相对于 path
            template:'./app/main.html'    //html模板路径
        })
    ]
}

/*
 new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
 //favicon:'./src/img/favicon.ico', //favicon路径
 filename:'index.html',    //生成的html存放路径，相对于 path
 template:'./app/index.html',    //html模板路径
 inject:true,    //允许插件修改哪些内容，包括head与body
 hash:true,    //为静态资源生成hash值
 minify:{    //压缩HTML文件
 removeComments:true,    //移除HTML中的注释
 collapseWhitespace:false    //删除空白符与换行符
 }
 })

 */