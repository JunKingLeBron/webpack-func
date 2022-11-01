var http = require('http')
var server = http.createServer(function(request, response) {
    console.log('进来了没')
    //设置响应头
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    //设置返回主体
    response.write('我的天1')

    //结束响应
    response.end()
})
server.listen(3000)
