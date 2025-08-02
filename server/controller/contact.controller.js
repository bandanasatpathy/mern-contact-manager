let Contact = require("../model/contact.model")

async function contactSave(req, res) {
    try {
        const contactExist = await Contact.findOne({ email: req.body.email })
        console.log("contactExist", contactExist)
        if (contactExist) {
            return res.status(409).json({ message: "user already exist" })
        } else {
            const contact = new Contact(req.body);
            await contact.save();
            res.status(201).json({ data: contact, message: 'Message received!' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error saving message' });
    }
}

async function getContact(req, res) {
    try {
        let data = await Contact.find({})
        console.log(data)
        res.status(201).json({ data: data, message: "here are your datas!" })

    } catch (err) {
        res.status(500).json({ message: 'could not find any data' });

    }
}

async function editContactData(req, res) {
    try {

        let updateContact = await Contact.findOneAndUpdate({ email: req.body.email }, 
            { name: req.body.name, message: req.body.message }, { new: true })
            res.status(201).json({data:updateContact,message:"updated data successfully"})

    } catch (err) {
        res.status(500).json({ message: 'could not update any data' });
    }
}

async function deleteContact(req,res){
    try{
        let deleteContact = await Contact.findOneAndDelete({email:req.params.email})
        res.status(201).json({message:"deleted data successfully"})

    }catch(err){
    res.status(500).json({ message: 'could not delete any data' });
    }
}

module.exports = {
    contactSave,
    getContact,
    editContactData,
    deleteContact
}