const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password , role } = req.body;

    const exits = await User.findOne({ email });
    if (exits) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed , role });

    res.json({ msg: 'User created successfully' });
    } catch (error) {
    res.status(500).json({ msg: error.message });
    }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }


    const token = jwt.sign({userId: user._id, email: user.email, role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ token , role: user.role , name: user.name });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router; 