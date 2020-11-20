const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoriteSchema = new Schema({
  id: Number,
  name: String,
  like: { type: Boolean, required: true }
})

module.exports = mongoose.model('Favorite', favoriteSchema)