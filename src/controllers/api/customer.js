var csKvs = require('../../modules/cs/kvs/CustomerService');
var userService = require('../../modules/user/services/UserService');
var wechatUserService = require('../../modules/user/services/WechatUserService');
var UserRole = require('../../modules/common/models/TypeRegistry').item('UserRole');
var csState = require('../../modules/common/models/TypeRegistry').item('CSState');
var Promise = require('bluebird');

module.exports = function(router) {
    router.get('/find', function*(){
        try{
            var customerList = yield userService.getRoleListAsync(UserRole.Customer.value());
            this.body = customerList;
        }catch(err){
            console.log('customer router find err:' + err);
            this.body = null;
        }
    });

    router.get('/snapshot', function*(){
        var res = {};
        var startTime = new Date();
        startTime.setHours(0);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        try{
            var totalCustomerSum = yield userService.getDocSumAsync({role:UserRole.Customer.value()});
            var todayIncreaseSum = yield userService.getDocSumAsync({role:UserRole.Customer.value(), crtOn: {$gt: startTime}});
            res.totalCustomerSum = totalCustomerSum;
            res.todayIncreaseSum = todayIncreaseSum;
            this.body = res;
        }catch(err){
            console.log('customer router snapshot err: ' + err);
            this.body = null;
        }
    });
}