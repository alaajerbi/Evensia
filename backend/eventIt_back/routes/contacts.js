const express=require('express');
const router=express.Router();
const {Contact,validate_contact}=require('../models/contact');
const _=require('lodash');
const logger=require('../logger');
const wrapper=require('../middleware/async_midlleware');


router.get('/',wrapper(async(req,res)=>{
    const contacts=await Contact.find();
    res.send(contacts);
}));

router.get('/:id',wrapper(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    res.send(contact);
}));

router.post('/',wrapper(async(req,res)=>{
     const {error}=validate_contact(req.body);
     logger.info(error);
     if(error) return res.status(400).send(error.details[0].message);

    var contact=await Contact.findOne({name:req.body.name});
    if(contact) return res.send('contact already exisits');

    contact=new Contact(_.pick(req.body,['name','description','tel','email','groupe','eventId'])  );
    await contact.save();
    res.send(contact);
}));

router.put('/:id',wrapper(async (req,res)=>{
    const result=await Guest.findOneAndUpdate({_id:req.params.id},req.body);
    res.send(result);
}));

router.delete('/:id',wrapper(async (req,res)=>{
    const result=await Contact.findByIdAndDelete(req.params.id);
    res.send(result);
}));


module.exports=router;