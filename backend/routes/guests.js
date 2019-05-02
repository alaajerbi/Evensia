const express=require('express');
const _=require('lodash');
const router=express.Router();
const {Guest,validate_guest}=require('../models/guest');
const logger=require('../logger');
const wrapper=require('../middleware/async_midlleware');

router.get('/',wrapper(async(req,res)=>{
    const guests=await Guest.find();
    res.send(guests);

}));

router.get('/:id',wrapper(async (req,res)=>{
    const guest=await Guest.findById(req.params.id);
    res.send(guest);
}));

router.get('/event/:eventId',wrapper(async(req,res)=>{
    const guest=await Guest.find({eventId:req.params.eventId});
    res.send(guest);
}));


router.post('/',wrapper(async (req,res)=>{
    const {error}=validate_guest(req.body);
    if(error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }

    let guest=await Guest.findOne({name:req.body.name});
    if(guest) return res.send('guest exists');

    guest=new Guest(_.pick(req.body,['name','description','tel','eventId','gender','present']));
    await guest.save();
    res.send(guest);

}));

router.put('/:id',wrapper(async (req,res)=>{
    const result=await Guest.findOneAndUpdate({_id:req.params.id},{
        $set :{
            name: req.body.name,
            description:req.body.description,
            tel:req.body.date,
            present :req.body.present
        }
    });
    res.send(result);

}));

router.delete('/:id',wrapper(async (req,res)=>{
    const guest=await Guest.findByIdAndDelete(req.params.id);
    res.send(guest);
}));



module.exports=router;
