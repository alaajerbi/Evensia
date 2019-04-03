const express=require('express');
const _=require('lodash');
const router=express.Router();
const {Event,validate_event}=require('../models/event');
const logger=require('../logger');

router.get('/',async(req,res)=>{
    const events=await Event.find();
    res.send(events);

});

router.post('/',async (req,res)=>{
    const {error}=validate_event(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let event=await Event.findOne({name:req.body.name});
    if(event) return res.send('event already created');

    event=new Event(_.pick(req.body,['name','description','date']));
    await event.save();
    res.send(event);

});

router.put('/:id',async (req,res)=>{
    try{
        const result=await Event.findOneAndUpdate({_id:req.params.id},{
            $set :{
                name: req.body.name,
                description:req.body.description,
                date:req.body.date
            }
        });
        res.send(result);
    }catch(err){
        res.send(err.message);
    }

});



module.exports=router;
