const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  founded: Number,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  seasons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Season' }]
});

module.exports = mongoose.model('League', leagueSchema);
