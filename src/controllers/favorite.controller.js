const Favorite = require('../models/favorite.model')

module.exports = {
  async list(req, res) {
    const favorite = await Favorite.find({}).sort('-createdAt-')
    return res.json(favorite)
  },

  async create(req, res) {
    const favorite = await Favorite.create(
      {
        name: req.body.name,
        like: req.body.like,
        id: req.body.id
      }
    )
    return res.json(favorite)
  },

  async delete(req, res) {
    const favorite = await Favorite.findOneAndDelete(req.params.id)
    return res.json(favorite)
  },

  async update(req, res) {
    const favorite = await Favorite.findByIdAndUpdate(req.params.id, {$set: req.body})
    return res.json(favorite)
  }
}