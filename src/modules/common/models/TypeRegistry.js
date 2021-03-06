var TypeRegistry = require('../../../framework/model/TypeRegistry');
var registry = new TypeRegistry('TypeRegistry', 'TypeRegistry', 'TypeRegistry');

registry
    .item('UserSourceType', 'UserSourceType', '用户来源')
    .addChild('WechatSite','site', '公众号')
    .addChild('WechatBot','bot', '助手号')
    .addChild('WebSite','web', '网站')

    .up().item('UserRole', 'UserRole', '用户角色')
    .addChild('Customer','cu', '普通用户')
    .addChild('CustomerService','cs', '客服')
    .addChild('Admin','ad', '系统管理员')
    .addChild('Bot','bt', '微信助手')

    .up().item('Case', 'Case', '标准化服务')
    .addChild('Coffee','co', '咖啡')
    .addChild('Car','car', '用车')

    .up().item('CaseStatus', 'CaseStatus', '服务类型')
    .addChild('Cancelled', 'cc', '已取消')
    .addChild('Draft', 'df', '草稿')
    .addChild('Reviewing', 'rw', '待审核')
    .addChild('Applying', 'ap', '待接单')
    .addChild('Undertake', 'ut', '已接单')
    .addChild('Inservice', 'is', '已上车')
    .addChild('Completed', 'co', '已完成')
    .addChild('UnPay','up', '未支付')
    .addChild('Payed','pd', '已支付')
    .addChild('Handle','hl', '处理中')
    .addChild('Serving','sv', '派送中')
    .addChild('Complete','cp', '已完成')
    .addChild('Close','cl', '已关闭')
    .addChild('Cancel','ca', '已作废')

    .up().item('MsgContent', 'MsgContent', '消息类型')
    .addChild('text','text', '文本')
    .addChild('voice','voice', '语音')
    .addChild('image','image', '图片')
    .addChild('video','video', '视频')
    .addChild('shortvideo','shortvideo', '小视频')

    .up().item('Party', 'Party', '方')
    .addChild('Org','og', '机构')
    .addChild('Person','pr', '个人')

    .up().item('ConversationState', 'ConversationState', '会话状态')
    .addChild('Started','st', '待处理')
    .addChild('WIP','wip', '进行中')
    .addChild('Finished','fn', '已结束')

    .up().item('CSState', 'CSState', '客服状态')
    .addChild('offline','off', '离线')
    .addChild('online','ol', '在线')
//.addChild('busy','busy', '忙碌')
//.addChild('case','case', '处理订单')


module.exports = registry;