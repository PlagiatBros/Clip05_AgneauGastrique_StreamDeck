var http = require('http'),
    send        = require('send'),
    fs= require('fs'),
    path = require('path'),
    server = http.createServer((req, res)=>{
        var url = req.url.replace(/\?.*$/, '')
        if (url == '/') url = __dirname + '/index.html'
        else if (url.match(/.*\.(png|gif|jpg|jpeg)/i)) url = path.join(__dirname, '/pix/', url)
        else url = __dirname + url
        if (fs.existsSync(url)) {
            send(req, url).on('error', console.error).pipe(res)
        } else {
            res.writeHead(404)
            res.end()
            console.error('File not found: ' + url)
        }
    })

server.listen(8000)
