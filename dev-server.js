/**
 * Created by Administrator on 2016/9/4.
 */
var express = require('express');
var webpack = require('webpack');
var congfig = require('./webpack.config');

var app = express();
var compiler = webpack(config);
var devMiddleware = require('webpack-dev-middleware')(compiler , {
    publicPath: congfig.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
})

app.use(devMiddleware);

app.listen(8888 , function(err){
    if( err ){
        console.log(err);
        return
    }
    console.log("Listening at http://localhost:8888")
});
