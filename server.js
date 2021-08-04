const express = require('express');
const https = require('https');
let path = require('path')
const fs = require('fs');

const app = express()
const port = process.env.PORT || 4433

const clientAuthMiddleware = () => (req, res, next) => {

  console.log('Invalid client certificate authentication.');

  if (!req.client.authorized) {
    return res.status(401).send('Invalid client certificate authentication.');
  } else {
    console.log("Certificate validation: ", req.client.authorized);
  }
  return next();
};

app.use(clientAuthMiddleware());

app.get('/', (req, res) => {
  return res.send('Hello, world!');
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "sslServer", "new", "server", "server-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "sslServer", "new", "server",  "server-crt.pem")),
  requestCert: true,
  rejectUnauthorized: true,
  ca: [fs.readFileSync(path.join(__dirname, "sslServer", "new", "server",  "ca-crt.pem"))],
};


const sslServer = https.createServer(options, app)

sslServer.listen(port, () => {
  console.log(`secure server is on port ${port}`);
})
