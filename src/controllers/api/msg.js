var msgService = require('../../modules/message/services/MessageService');

module.exports = function(router) {
    router.get('/_:cvsId', function*(){
        var cvsId = this.params.cvsId;
        var params = {
            conditions:{
                channel: cvsId
            },
            populate:[
                {
                    path: 'from',
                    select: 'wx_nickname',
                    model: 'User'
                },
                {
                    path: 'to',
                    select: 'wx_nickname',
                    model: 'User'
                }
            ]
        }
        try{
            var msgList = yield msgService.findAsync(params);
            this.body = msgList;
        }catch(err){
            console.log('msg controller find msg by cvsId err: ' + err);
        }
    });
}
