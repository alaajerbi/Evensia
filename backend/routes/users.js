const express=require('express');
const router=express.Router();
const {User,validateUser}=require('../models/user');
const auth=require('../middleware/auth');
const logger=require('../logger');
const wrapper=require('../middleware/async_midlleware');


router.get('/',auth,wrapper(async (req,res)=>{
    const users=await User.find();
    res.send(users);
}));

router.get('/:id',wrapper(async (req,res)=>{
    const users=await User.findById(req.params.id);
    res.send(users);
}));

router.post('/',wrapper(async (req,res)=>{
    const err=validateUser(req.body);
    if(err) return res.json({status: 'failed', error: err.details[0].message});

    let user=await User.findOne({email: req.body.email});
    if(user) return res.json({status: 'failed', error: 'User already Registred'});

    user=new User({email:req.body.email,fullName:req.body.fullName});
    user.setPassword(req.body.password);
    // logger.info(user);

    await user.save();
    let token = user.generateAuthToken();
    res.header({
        'Access-Control-Expose-Headers': 'token',
        'token':token,
     }).json({status: 'success', user});
}));

router.put('/:id',wrapper(async(req,res)=>{

}));    

router.delete('/:id',wrapper(async(req,res)=>{
    const user=await User.findByIdAndDelete(req.params.id);
    res.send(user);
}));

module.exports=router;