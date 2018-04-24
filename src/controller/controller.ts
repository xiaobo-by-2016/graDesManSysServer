import * as express from 'express';
import * as createError from 'http-errors';
import * as logger from 'morgan'
import * as path from 'path';
import * as cookieParser from 'cookie-parser';

/*--------------------引入服务---------------------*/
import * as loginService from '../services/loginService'
/*-----------------------------------------------*/


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());

/**********加载前端项目到服务器**********/
    //待编码

/**********各种请求路径**********/
app.use('/',loginService.login());

/**********atch 404 and forward to error handler**********/
app.use((req, res, next) => {
    next(createError(404));
});
/********** error handler**********/
app.use((err, req, res, next) =>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.end('error');
});
export = app;

