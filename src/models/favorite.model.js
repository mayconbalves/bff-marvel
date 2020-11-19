const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoriteSchema = new Schema({
  id: { type: Number, require: true },
  like: { type: Boolean, required: true }
})

module.exports = mongoose.model('Favorite', favoriteSchema)