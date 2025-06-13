const Season = require('../models/Season');

// Create season
const createSeason = async (req, res) => {
  try {
    const season = await Season.create(req.body);
    res.status(201).json(season);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all seasons
const getSeasons = async (req, res) => {
  try {
    const seasons = await Season.find().populate('league').populate('champion');
    res.json(seasons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createSeason, getSeasons };
