require("dotenv").config();

const fastify = require('fastify')({
	logger: true
})


fastify.register(require('./src/routes/tagRoutes'))


const mongoose = require('mongoose')

mongoose
	.connect(process.env.DB_CONNECT)
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = fastify
