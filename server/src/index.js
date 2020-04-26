import express from 'express'
import http from 'http'
const app = express()
const server = http.createServer(app);
import io from 'socket.io'
const ioApp = io(server)

app.get('/', (req, res) => {
  res.send('hello world!')
})

ioApp.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});

app.listen(3000, () => console.log('app start'))