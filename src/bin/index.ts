/**
 * Created by xiaobo on 2018/4/24.
 */
import * as app from '../controller/controller';
import * as debug from 'debug';
import * as http from 'http';


const port = normalizePort(process.env.PORT || 3000);

/**********端口设置**********/
app.set('port',port);

/**********创建服务器实例**********/
const server = http.createServer(app);

/**********监听端口**********/
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

/**********验证端口的有效性**********/
function  normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}