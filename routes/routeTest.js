const express = require('express');
const { Schema } = require('mongoose');
const router = express.Router();
const UserTest = require('../models/userTest');

router.get('/meetfood', async (req, res) => {
    const user = new UserTest({
        firstName: 'Wenzhe',
        userName: 'manzitlo',
    });
await user.save();

    res.send('<h2>Hello world from first Express.js!</h2>');
});

module.exports = router;