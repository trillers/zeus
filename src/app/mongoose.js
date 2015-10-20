var mongoose = require('mongoose');
var settings = require('zeus-settings').mongo;
var logger = require('./logging').logger;

var makeUrl = function(mongo){
    var authPart = settings.username + ':' + settings.password + '@';
    var auth = settings.username ? authPart : '';
    return 'mongodb://' + auth + mongo.host + ':' + mongo.port + '/' + mongo.db;
};

var url = makeUrl(settings);
var options = {};

mongoose.connect(url, options, function(err){
    logger.info('Mongoose is connected to ' + url);
});
mongoose.connection.on('error', function(err){
    logger.error('Mongoose error happens:' + err);
});

module.exports = mongoose;