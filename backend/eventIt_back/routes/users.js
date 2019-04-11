const express=require('express');
const router=express.Router();
const {User,validateUser}=require('../models/user');
const auth=require('../middleware/auth');
const logger=require('../logger');

router.get('/',auth,async (req,res)=>{
    const users=await User.find();
    res.send(users);
});

router.post('/',async (req,res)=>{
    const err=validateUser(req.body);
    if(err) return res.status(400).send(err.details[0].message);

    let user=await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already Registred');

    user=new User({email:req.body.email});
    user.setPassword(req.body.password);
    // logger.info(user);

    await user.save();
    res.send(user);
});

module.exports=router;