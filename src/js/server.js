var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var contenttype = require('./contentType');
var server = http.createServer(function(req, res) {
    var params = url.parse(req.url, true);
    var pathname = params.pathname;

    // 响应ajax请求
    if(/^\/ajax\/(\w+)$/i.test(pathname)){
        // 返回前端的文本
        var resText = '';
       // 根据不同的路径返回相应的数据
        switch(RegExp.$1){
        	case 'liuyanban':
                var data = require('./data/liuyanban.json');
                resText = JSON.stringify(data);
                break;
        }

        res.writeHead(200,{'content-type':'text/plain;charset=utf8'});
        res.end(resText);
    }else{
        var pathname = params.pathname
        if (pathname.slice(-1) === "/") {
            pathname += 'index.html'; //默认取当前默认下的index.html
        }
        var realPath = path.join(process.cwd(), pathname);
        var ext = path.extname(realPath);
        ext = ext ? ext.slice(1) : 'unknown';
        fs.exists(realPath, function(exists) {
            if (!exists) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('This request URL' + pathname + ' was not found on this server.');
                res.end();
            } else {
                fs.readFile(realPath, 'binary', function(err, file) {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end(err);
                    } else {
                        var contentType = contenttype.types[ext] || 'text/plain';
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.write(file, 'binary');
                        res.end();
                    }
                });
            }
        });
    }
});
server.listen(3000,function(){
    console.log('server start at http://localhost:3000');
});
