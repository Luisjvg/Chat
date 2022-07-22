const express = require('express')
const message = require('../Components/Message/network')
const user = require('../Components/User/network')
const chat = require('../Components/chat/network')

const routes = function(server){
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
}

module.exports = routes;