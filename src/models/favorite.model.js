const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoriteSchema = new Schema({
  like: { type: Boolean, required: true }
})

module.exports = mongoose.model('Favorite', favoriteSchema)