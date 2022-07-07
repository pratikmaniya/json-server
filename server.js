const jsonServer = require('json-server')
const express = require('express')
const server = jsonServer.create()

const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
server.use(express.static('public'))

server.use(middlewares)

router.render = function (req, res) {
  res.json(res.locals.data)
}

server.use('/db/', router)

const port = process.env.PORT || 5000

server.listen(port, function () {
  console.log('JSON Server is running on ' + port)
})