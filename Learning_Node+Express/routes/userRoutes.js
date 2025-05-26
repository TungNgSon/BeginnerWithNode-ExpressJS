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
module.exports = router;
