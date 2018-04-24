/**
 * Created by xiaobo on 2018/4/25.
 */
import * as express from 'express';
import * as sqlActions from '../data-base/SqlActions';
import * as smsService from './smsService';
const router = express.Router();

const loginService = {
    login: function () {
        return router.get('/', function (req, res, next) {
            const sql = 'select * from user';
            sqlActions.queryActions.queryBySqlString(sql, function (err, results, fields) {
                /*smsService.sendSms();*/
                res.send(results)
            })
        });
    }

};
export = loginService;