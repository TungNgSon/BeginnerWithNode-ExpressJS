const Team = require('../models/Team');

// Create team
const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all teams
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('players').populate('league');
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createTeam, getTeams };
