const express=require('express');
const router=express.Router();
const {Event,validate_event}=require('../models/event');

const _=require('lodash');
const logger=require('../logger');
const wrapper=require('../middleware/async_midlleware');

const multer=require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    }
  });
const upload=multer({storage:storage});



router.get('/',wrapper(async(req,res,next)=>{
    const events=await Event.find();
    res.send(events);
}));

router.get('/:id',wrapper(async(req,res)=>{
    const event=await Event.findById(req.params.id);
    res.send(event);
}));


router.post('/',wrapper(async (req,res)=>{
    const {error}=validate_event(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let event=await Event.findOne({name:req.body.name});
    if(event) return res.send('event already created');

    event=new Event(_.pick(req.body,['name','description','date','designColor']));
    await event.save();
    res.send(event);

}));

router.post('/img/:id',upload.single('avatar'),wrapper(async (req,res)=>{
    const result= await Event.findOneAndUpdate({_id:req.params.id},{
        $set: {
            img: req.file.filename
        }
    })
    res.send(result);
}));

router.put('/:id',wrapper(async (req,res)=>{
    const result=await Event.findOneAndUpdate({_id:req.params.id},{
        $set :{
            name: req.body.name,
            description:req.body.description,
            date:req.body.date,
            designColor:req.body.designColor
        }
    });
    res.send(result);

}));

router.delete('/:id',wrapper(async (req,res)=>{
    const result=await Event.findByIdAndDelete(req.params.id);
    res.send(result);
}));




module.exports=router;
