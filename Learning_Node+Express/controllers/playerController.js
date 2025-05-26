const Player = require('../models/Player');

// Create player
const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find().populate('team');
    res.render('players', { players });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createPlayer, getPlayers };
