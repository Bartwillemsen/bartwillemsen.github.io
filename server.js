const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
 
app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

let clients = [];
app.ws('/trips', function(ws, req) {
  ws.on('message', function(msg) {
    console.log('Message received: ' + msg);
    clients.push(ws);
    clients.forEach(c => c.send());
  });
  console.log('socket', req.testing);
});
 
console.log('server started on port 3000');
app.listen(3000);