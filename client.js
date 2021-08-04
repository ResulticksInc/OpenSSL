var fs = require('fs');
var https = require('https');
let path = require('path')

var options = {
    hostname: 'localhost',
    port: 4433,
    path: '/',
    method: 'GET',
    key: fs.readFileSync(path.join(__dirname, "sslServer", "new", "client", "client1-key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "sslServer", "new", "client",  "client1-crt.pem")),
    ca: fs.readFileSync(path.join(__dirname, "sslServer", "new", "client",  "ca-crt.pem"))
}
var req = https.request(options, function (res) {
    res.on('data', function (data) {
        process.stdout.write(data);
    });
});
req.end();
req.on('error', function (e) {
    console.error(e);
});