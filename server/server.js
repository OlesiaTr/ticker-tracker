'use strict'
const express = require('express')
const http = require('http')
const io = require('socket.io')
const cors = require('cors')

let dataUpdateInterval = 15000
let socketIsConnected
let timer
const PORT = process.env.PORT || 4000

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
]

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min
  return random.toFixed(precision)
}

function utcDate() {
  const now = new Date()
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  )
}

function getQuotes(socket) {
  const quotes = tickers.map((ticker) => ({
    ticker,
    exchange: 'NASDAQ',
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }))

  socket.emit('ticker', quotes)
}

function trackTickers(socket) {
  clearInterval(timer)
  timer = setInterval(() => getQuotes(socket), dataUpdateInterval)
}

const app = express()
app.use(cors())
app.use(express.json())
const server = http.createServer(app)

const socketServer = io(server, {
  cors: {
    origin: '*',
  },
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/update-interval-time', (req, res) => {
  res.json({ dataUpdateInterval })
})

app.post('/update-interval-time', (req, res) => {
  const { updatedInterval } = req.body

  if (socketIsConnected) {
    dataUpdateInterval = updatedInterval
    trackTickers(socketIsConnected)
  }

  res.status(200).json({
    dataUpdateInterval,
    message: 'The interval was successfully updated.',
  })
})

socketServer.on('connection', (socket) => {
  socketIsConnected = socket

  socket.on('start', () => {
    trackTickers(socket)
  })
})

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`)
})
