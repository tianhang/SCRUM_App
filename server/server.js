/**
 * Created by tianhang on 1/9/2016.
 */
var http = require('http');
var express =require('express');

var app = express();
var config = require('./config');
//app.use(express.logger());
//app.use(express.bodyParser());


require('./lib/routes/appFile').addRoutes(app,config);

var server  = http.createServer(app);

server.listen(config.server.listenPort,function () {
    // // Once the server is listening we automatically open up a browser
    var open = require('open');
    open('http://localhost:' + config.server.listenPort + '/');
});

console.log('Angular App Server - listening on port: ' + 3000);





