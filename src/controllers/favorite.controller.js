const Favorite = require('../models/favorite.model')

module.exports = {
  async list(req, res) {
    const favorite = await Favorite.find({}).sort('-createdAt-')
    return res.json(favorite.slice(0, 5))
  },

  async create(req, res) {
    const favorite = await Favorite.create(
      {
        id: req.body.id,
        like: req.body.like
      }
    )
    return res.json(favorite)
  },

  async delete(req, res) {
    const favorite = await Favorite.findOneAndDelete(req.params.id)
    return res.json(favorite)
  },

  async update(req, res) {
    const favorite = await Favorite.findOneAndUpdate(req.params.id, {$set: req.body})
    return res.json(favorite)
  }
}