'use strict';

var http	 = require('http');
var app		 = require('./app/app');
var server   = http.createServer( app );
var io		 = require('socket.io').listen( server , {log:true});
var realtime = require('./app/realtime');

realtime( io );

var router   = require('./app/router');
router( app );

function error( err ) {
    console.error(err);
    process.exit(-1);
}

server.listen(app.get('port'), function(err){
    if( err ) { error( err ); }
    console.log('Server running at http:127.0.0.1:'+app.get('port') + '/');
});