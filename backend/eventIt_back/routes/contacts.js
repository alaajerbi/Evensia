const express=require('express');
const router=express.Router();
const {Contact,validate_contact}=require('../models/contact');
const _=require('lodash');
const logger=require('../logger');


router.get('/',async(req,res)=>{
    const contacts=await Contact.find();
    res.send(contacts);
});

router.post('/',async(req,res)=>{
     const {error}=validate_contact(req.body);
     logger.info(error);
     if(error) return res.status(400).send(error.details[0].message);

    var contact=await Contact.findOne({name:req.body.name});
    if(contact) return res.send('contact already exisits');

    contact=new Contact(_.pick(req.body,['name','description','tel','email','groupe','eventId'])  );
    await contact.save();
    res.send(contact);
});

router.put('/:id',async (req,res)=>{
    const result=await Guest.findOneAndUpdate({_id:req.params.id},req.body);
    res.send(result);
});

module.exports=router;