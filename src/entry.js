const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Imports all routers
const favorite = require('./routes/favorite.router')

const mongoDB = 'mongodb+srv://marvel:marvel2020@cluster0.upy7g.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(mongoDB, {
  useNewUrlParser : true,
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// baseUrl:  http://localhost:8080/favorite/
app.use('/favorite', favorite)

const port = 8080

app.listen(port, () => {
  console.log('Server start on port ' + port)
})
