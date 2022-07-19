const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { isAuthenticated } = require("../middleware/isAuthenticated");

router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    await User.findById(req.payload._id);
    console.log(req.payload)
    return res.status(200).json({
        message: 'Current user found',
        user: req.payload
    })  } catch (error) {
    next(error);
  }
});

router.post('/upload', isAuthenticated, async (req, res, next) => {
  try {
    const { image } = req.body;
    await User.findByIdAndUpdate(
        req.payload._id,
        {
         image   
        }, 
        { new: true }
        );
      
    return res.status(200).json({
        message: 'Profile Picture updated',
        image: image,
        user: req.payload,
      });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const id = req.user._id;
    const { image } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      {
        image,
      },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
