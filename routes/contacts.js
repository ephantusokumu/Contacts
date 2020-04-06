const express  = require('express');
const router = express.Router(); 
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator/check');
const Contact = require('../models/Contact');
const User = require('../models/User');

//@ route GET api/contacts
//@desc  Get all users contacts
//@access  Privaatee
router.get('/', auth, async(req, res) =>{
   try {
       const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
       res.json(contacts)
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
       
   }
});

//@ route POST api/contact
//@desc  Add contacts
//@access  private
router.post('/',[auth,[
    check('name', 'Name is required').not().isEmpty()
]], 
async (req, res) =>{
    const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
   }
   const {name, email, phone, type} = req.body;
   try {
       const newContact = new Contact({
           name,
           email,
           phone,
           type,
           user: req.user.id
       });

       const contact = await newContact.save();

       res.json(contact);
       
   } catch (err) {
       console.error(err.message);
       res.status(500).send('server error')
       
   }

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