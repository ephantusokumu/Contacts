const express  = require('express');
const router = express.Router(); 

//@ route GET api/contacts
//@desc  Get all users contacts
//@access  Privaatee
router.get('/', (req, res) =>{
    res.send('Get logged in users');
});

//@ route POST api/contact
//@desc  Add contacts
//@access  private
router.post('/', (req, res) =>{
    res.send('Add Contacts');
});


//@ route PUT api/contact/:id
//@desc  Update contacts
//@access  Privaatee
router.put('/', (req, res) =>{
    res.send('Update contacts');
});

//@ route DELETE api/contact/:id
//@desc  Delete contacts
//@access  PUBLIC
router.delete('/', (req, res) =>{
    res.send('Delete contacts');
});
module.exports = router;