const http = require('http');

let server = http.createServer((req,res)=>{   //请求
    console.log('请求来了');

    console.log(req.url);
    
    res.write('abc');
    res.end();
})

//监听
server.listen(8000);



//监听 等等客户端的链接
//端口： 服务器的门牌号数字