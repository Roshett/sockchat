// import express from 'express'
// import http from 'http'
// const app = express()
// const server = http.createServer(app);
// import io from 'socket.io'
// const ioApp = io(server)
// const cors = require('cors')

// app.use(cors({
//   origin: true,
//   credentials: true
// }))

// app.get('/', (req, res) => {
//   res.send('hello world!')
// })

// ioApp.on('connection', (socket) => {
//   console.log('connect');
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', (data) => {
//     console.log(data);
//   });
// });

// app.listen(3000, () => console.log('app start'))


import express from 'express'
import http from 'http'
import ioLib from 'socket.io'

const ioApp = ioLib(server)
const app = express();
const server = http.createServer(app);

let messages = []

ioApp.listen(server)

ioApp.on('connection', (socket) => {
  socket.broadcast.emit('sendMessage', messages);

  socket.on('send', data => {
    console.log(data)
    messages.push({message: data})
    console.log(messages)
    ioApp.emit('sendMessage', messages);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000);
