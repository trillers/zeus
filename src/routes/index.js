module.exports = function(app){
    require('./favicon')(app);
    require('./heartbeat')(app);
    require('./static')(app);
    app.keys = ['keys', 'keykeys'];
    app.use(require('../middlewares/session')());

    //app.use(function*(next){
    //    if(!this.session.user && this.originalUrl !== '/login'){
    //        this.redirect('/login');
    //    }else{
    //        yield next;
    //    }
    //});
    require('../controllers')(app);

}
