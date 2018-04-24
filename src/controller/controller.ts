import * as express from 'express';
import * as createError from 'http-errors';
import * as logger from 'morgan'
import * as path from 'path';
import * as cookieParser from 'cookie-parser';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());

/**********加载前端项目到服务器**********/
    //待编码

/**********各种请求路径**********/
app.use('/',(req,res,next)=>{
   res.send('请求成功！！！');
});

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


/*
const server = app.listen(8000,'localhost',() =>{
   console.log('服务器启动,端口:8000')
});
*/
export = app;

