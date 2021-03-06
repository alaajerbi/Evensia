const express=require('express');
const router=express.Router();
const User=require('../models/user').User;
const Joi=require('joi');
const jwt=require('jsonwebtoken');
const logger=require('../logger');

router.post('/',async (req,res)=>{
    const {err}=validate(req.body);
    if(err) return res.json({
        status: 'error',
        error: err.details[0].message
    })

    const user=await User.findOne({email:req.body.email});
    if(!user) return res.json({
        status: 'error',
        error: 'User not found'
    });

    const validPassword=user.validatePassword(req.body.password);
    if(!validPassword) return res.json({
        status: 'error',
        error: 'Invalid password'
    });

    console.log(user);

    const token=user.generateAuthToken();
    res.header({
        'Access-Control-Expose-Headers': 'token',
        'token':token,
     }).json({
         status: 'success',
         userId: user._id
     });

});

function validate(user){
    const schema={
        email:Joi.string().email().required(),
        password:Joi.string().required()
    }
    return Joi.validate(user,schema);
}

module.exports=router;