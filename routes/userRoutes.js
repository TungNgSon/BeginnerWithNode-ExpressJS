const express = require('express');
const router = express.Router();
const { createUser, getUsers,getAllUsers,loginUser } = require('../controllers/userController');
const authenticate = require('../middlewares/auth');

router.post('/register', createUser);   
router.get('/:email', authenticate, getUsers);
router.get('/', authenticate, getAllUsers); 
router.post('/login', loginUser);  
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}` });
});
//Register
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});
//Login
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
module.exports = router;
