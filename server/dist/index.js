"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var ioApp = (0, _socket["default"])(server);
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.send('hello world!');
});
ioApp.on('connection', function (socket) {
  console.log('connect');
  socket.emit('news', {
    hello: 'world'
  });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
app.listen(3000, function () {
  return console.log('app start');
});