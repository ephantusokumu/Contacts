const express  = require('express');
const router = express.Router(); 

//@ route GET api/auth
//@desc  Get logged in users
//@access  Privaatee
router.get('/', (req, res) =>{
    res.send('Get logged in users');
});

//@ route POST api/auth
//@desc  Auth user and get token
//@access  PUBLIC
router.post('/', (req, res) =>{
    res.send('Login User');
});

module.exports = router;