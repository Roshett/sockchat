import express from 'express'
import io from 'socket.io'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world!')
})

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});

app.listen(3000, () => console.log('app start'))
