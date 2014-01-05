var path    = require('path');
var express = require('express');
var app     = module.exports = express();

app.configure(function(){
    app.set('port', 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine','jade');
    app.set('view cache', false);
    app.use(express.favicon());
    //app.use(express.logger('dev'));    
    app.use(app.router);    
    app.use(express.static(path.join(__dirname, '..', 'public')));
});
