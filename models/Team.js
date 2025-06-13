const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  stadium: String,
  founded: Number,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' }
});

module.exports = mongoose.model('Team', teamSchema);
