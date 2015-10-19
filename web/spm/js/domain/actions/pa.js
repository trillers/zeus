var domain = require('../domain');
var apiFactory = domain.restApi();

domain.action('getCvsSnapshot').onExecute(function(filter){
    apiFactory.get('/cvs/snapshot').drive(this).send({filter: filter});
});


module.exports = null;