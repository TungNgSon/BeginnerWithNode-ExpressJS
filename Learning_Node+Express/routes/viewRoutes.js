const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Render all players
router.get('/players', playerController.getPlayers);

// You can add more view routes here as needed

module.exports = router;
