var router = require('koa-router');

module.exports = function(app){
    //user module
    var user_router = new router();
    user_router.prefix('/api/user');
    require('./user')(user_router);
    app.use(user_router.routes());

    //cvs module
    var cvs_router = new router();
    cvs_router.prefix('/api/cvs');
    require('./cvs')(cvs_router);
    app.use(cvs_router.routes());
}