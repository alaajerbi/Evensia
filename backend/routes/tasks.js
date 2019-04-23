const express=require('express');
const _=require('lodash');
const router=express.Router();
const {Task,validate_task}=require('../models/task');
const logger=require('../logger');
const wrapper=require('../middleware/async_midlleware');

router.get('/',wrapper(async(req,res)=>{
    const tasks=await Task.find();
    res.send(tasks);

}));

router.get('/:id',wrapper(async (req,res)=>{
    const task=await Task.findById(req.params.id);
    res.send(task);
}));

router.get('/event/:eventId',wrapper(async(req,res)=>{
    const tasks=await Task.find({eventId:req.params.eventId});
    res.send(tasks);
}));


router.post('/',wrapper(async (req,res)=>{
    // const {error}=validate_task(req.body);
    // logger.info(error);
    // if(error) return res.status(400).send(error.details[0].message);

    let task=await Task.findOne({description:req.body.description});
    if(task) return res.send('task exists');
    
    task=new Task(_.pick(req.body,['description','time','eventId']));
    await task.save();
    res.send(task);

}));

router.put('/:id',wrapper(async (req,res)=>{
    const result=await Task.findOneAndUpdate({_id:req.params.id},{
        $set :{
            description:req.body.description,
            time:req.body.time,
            done:req.body.done
        }
    });
    res.send(result);

}));

router.delete('/:id',wrapper(async (req,res)=>{
    const task=await Task.findByIdAndDelete(req.params.id);
    res.send(task);
}));



module.exports=router;
