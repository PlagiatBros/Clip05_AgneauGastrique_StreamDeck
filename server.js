var http = require('http'),
    send        = require('send'),
    fs= require('fs'),
    path = require('path'),
    server = http.createServer((req, res)=>{
        var url = req.url
        if (url == '/') url = __dirname + '/index.html'
        else if (url.match(/.*\.(png|gif|jpg|jpeg)/i)) url = path.join(__dirname, '/pix/', url)
        else url = __dirname + url
        console.log(url)
        send(req, url).on('error', console.error).pipe(res)
    })

server.listen(8000)
