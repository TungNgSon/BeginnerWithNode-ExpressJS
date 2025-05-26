const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,   // email phải duy nhất
    required: true
  } 
  ,
  email: {
    type: String,
    unique: true,   
    required: true
  },
  password: {
    type: String,
    required: true,
    select : false // Không trả về password khi truy vấn
  },
  role : {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
});

module.exports = mongoose.model('User', userSchema);
