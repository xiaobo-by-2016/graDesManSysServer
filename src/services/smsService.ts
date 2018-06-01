/**
 * Created by xiaobo on 2018/4/25.
 */
/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
const QcloudSms = require("qcloudsms_js");

const qcloudsms =QcloudSms();
/*
const SMSClient = require('@alicloud/sms-sdk');
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIxOfuGv68k9YG';
const secretAccessKey = 'zVCQpFSJuNp1b7CKrnNbceGT7IMgqn';
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});
//发送短信
const smsService ={
    sendSms:function () {
        smsClient.sendSMS({
            PhoneNumbers: '18428369049',
            SignName: '本科毕业设计移动服务平台',
            TemplateCode: 'SMS_133180842',
            TemplateParam: '{"code":"12345"}'
        }).then(function (res) {
            let {Code}=res
            if (Code === 'OK') {
                //处理返回参数
                console.log(res)
            }
        }, function (err) {
            console.log(err)
        });
    }
}
export = smsService;*/
