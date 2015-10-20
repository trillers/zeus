var cvsService = require('../../src/modules/conversation/services/ConversationService');
var assert = require('assert');

describe('create cvs', function(){
    before(function(done){
        setTimeout(function(){
            done()
        }, 2000);
    })
    it('success create cvs', function(done){
        var cvs = {
            stt: 'wip'
            , initiator: '1t5N2'
            , csId: '1t5RA'
            , cases: []
            , createTime: new Date()
            , closeTime: new Date()
        }
        cvsService.create(cvs, function(err, data){
            assert.ok(!err);
            assert.equal(data.initiator, cvs.initiator);
            done();
        })
    });
})