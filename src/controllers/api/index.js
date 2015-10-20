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

    //msg module
    var msg_router = new router();
    msg_router.prefix('/api/msg');
    require('./msg')(msg_router);
    app.use(msg_router.routes());

    //cs module
    var cs_router = new router();
    cs_router.prefix('/api/cs');
    require('./cs')(cs_router);
    app.use(cs_router.routes());

    //customer module
    var customer_router = new router();
    customer_router.prefix('/api/customer');
    require('./customer')(customer_router);
    app.use(customer_router.routes());
}