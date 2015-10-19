var cvsService = require('../../modules/conversation/services/ConversationService');

module.exports = function(router){
    router.get('/snapshot', function *(){
        var res = {
            todayCvsSum: 19,
            wipCvsSum: 1,
            fnCvsSum: 18,
            totalSum: 49
        };

        this.body = res;
    });
}