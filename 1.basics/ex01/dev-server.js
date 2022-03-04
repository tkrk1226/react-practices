// ES6 module system을 쓰고 있음. 따라서 node에게 Node에게 버전을 알려줘야한다. 따라서 지금 default로 쓰는 설정은...?
import http from 'http';
import * as path from 'path';
import express from 'express';

const port = 9010;

const application = express().use(express.static(path.join(path.resolve('.'), 'public')));
http
    .createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port }`);
    })
    .listen(port);

//const application = express().use(express.static(express.static(path.join(path.resolve('.'), 'public')))); 
//const application = express().use(express.static(express.static(path.join(__dirname, 'public')))); // module에서는 __dirname 못쓴다 

/*
http
    .createServer(application)
    .on('listening', function(){
        console.info('http server runs on ' + port); // notice formatting 
        console.info(`http server runs on ${port }`); // 위와 같은 표현, tilt(`)를 써야한다.
    })
    .listene(port);
*/