const express = require("express");
const router = express.Router();

const {contactSave,getContact,editContactData,deleteContact} = require("../controller/contact.controller")

router.post('/contactSave',contactSave)
router.get('/getContacts',getContact)
router.post('/editContactData',editContactData)
router.get('/deleteContact/:email',deleteContact)

module.exports = router