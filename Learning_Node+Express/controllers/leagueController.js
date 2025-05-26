const League = require('../models/League');

// Create league
const createLeague = async (req, res) => {
  try {
    const league = await League.create(req.body);
    res.status(201).json(league);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all leagues
const getLeagues = async (req, res) => {
  try {
    const leagues = await League.find().populate('teams').populate('seasons');
    res.json(leagues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createLeague, getLeagues };
