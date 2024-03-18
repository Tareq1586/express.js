const express = require('express');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const userSchema = require('../schemas/userSchema');

const User = new mongoose.model('User', userSchema);
const router = express.Router();

// signup for a user
router.post('/signup', async (req, res) => {
  try {
    // saltRounds=10
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: 'Signup was successful' });
  } catch {
    res.status(500).json({ message: 'Signup failed' });
  }
});

// login for a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
      if (isValidPassword) {
      // generate token
        const token = jwt.sign({
          username: user[0].username,
          userId: user[0]._id,
        }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        res.status(200).json({
          'access-token': token,
          message: 'Login successful',
        });
      } else {
        res.status(401).json({
          error: 'Authentication failed!',
        });
      }
    } else {
      res.status(402).json({
        error: 'Authentication failed!',
      });
    }
  } catch (err) {
    res.status(403).json({
      error: err.message,
    });
  }
});

// get all users
router.get('/all', async (req, res) => {
  try {
    const users = await User.find({}).populate('todos');
    res.status(500).json({
      data: users,
      message: 'Success',
    });
  } catch {
    res.status(500).json({
      message: 'There was an error in the server side',
    });
  }
});

module.exports = router;
