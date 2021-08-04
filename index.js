// const fs = require('fs');
// const https = require('https');
// const http = require('http');
// const express = require('express');

// const port = 9000;
// const app = express();

// const ServerLog = (title, value) => {
//   console.log(`\n **** \n ${title} \n ${value} \n **** End \n`);
// }

// const clientAuthMiddleware = () => (req, res, next) => {

//   ServerLog("Authorized value", req.client.authorized)

//   if (!req.client.authorized) {
//     return res.status(401).send('Invalid client certificate authentication.');
//   }
//   return next();
// };

// app.use(clientAuthMiddleware());

// app.get('/', (req, res) => {
//   return res.send('Hello, world!');
// });

// const options = {
//   // use the server key
//   key: fs.readFileSync('server-key.pem'),
 
//   // use the server cert
//   cert: fs.readFileSync('server-crt.pem'),

//   // enforce client certs
//   requestCert: false,
//   rejectUnauthorized: false,

//   // add client cert as part of the certificate authority
//   ca: [ fs.readFileSync('client-crt.pem') ],
// };

// https
//   .createServer(
//     options,
//     app
//   )
// app.listen(port, () => {
//   ServerLog("Server is running on port", port)
// });



var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT || 8080); //the server object listens on port 8080