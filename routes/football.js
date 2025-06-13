const express = require('express');
const router = express.Router();

const playerController = require('../controllers/playerController');
const teamController = require('../controllers/teamController');
const leagueController = require('../controllers/leagueController');
const seasonController = require('../controllers/seasonController');
const authenticate = require('../middlewares/auth');

// Player routes
router.post('/players',authenticate, playerController.createPlayer);
router.get('/players', playerController.getPlayers);

// Team routes
router.post('/teams',authenticate, teamController.createTeam);
router.get('/teams', authenticate,teamController.getTeams);

// League routes
router.post('/leagues',authenticate, leagueController.createLeague);
router.get('/leagues', authenticate,leagueController.getLeagues);

// Season routes
router.post('/seasons',authenticate, seasonController.createSeason);
router.get('/seasons',authenticate, seasonController.getSeasons);

router.get('/test', (req, res) => {
  res.send('Football routes are working!');
});
module.exports = router;
