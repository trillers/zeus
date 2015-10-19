module.exports = function(router){
    require('../../app/routes-spa')(router);

    router.get('/', function *(){
        yield this.render('index');
    });
};