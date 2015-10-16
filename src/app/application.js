var koa = require('koa');
var app = module.exports = koa();
var views = require('co-views');
var logging = require('./logging');
var logger = require('./logging').logger;
var path = require('path');
var settings = require('zeus-settings');
var render= views(path.join(__dirname, '../views'), { map: { html: 'swig' }});
app.env = 'development' || settings.env.NODE_ENV;
app['port'] =  process.env.PORT || settings.env.PORT;//TODO: configure it by settings
app['bindip'] =  process.env.BINDIP || settings.env.BINDIP;

var http = require('http');
var env = app.env;

var system = require('./system');
system.addMember('application', app);

app.use(logging.generatorFunc);
//router
require('../routes')(app);

//404
app.use(function *pageNotFound(next) {
    this.response.body = yield render('404');
});

//error
app.on('error', function(err){
    console.log(err);
})

app.listen(app.port, app.bindip, function(){
    logger.info('The server is binding on '+ app.bindip +' and listening on port ' + app.port + ' in ' + env );
    system.memberUp(app);
});