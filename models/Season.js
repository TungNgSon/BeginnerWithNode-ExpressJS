const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  year: { type: String, required: true },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
  champion: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('Season', seasonSchema);
