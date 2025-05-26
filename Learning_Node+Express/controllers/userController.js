const User = require('../models/User');
const jwt = require('jsonwebtoken');
// POST /api/users
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: req.body.email }).select('+password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });
    const token = jwt.sign(
  { id: user._id, email: user.email, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
    res.json({ token, message: 'Login successful' });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /api/users
const getUsers = async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { createUser, getUsers, getAllUsers, loginUser };
