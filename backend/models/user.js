const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi=require('joi');
const logger=require('../logger');

const userSchema=mongoose.Schema({
    email:String,
    hash:String,
    fullName:String
});

userSchema.methods.setPassword= function(password){
    const salt= bcrypt.genSaltSync(10);
    this.hash= bcrypt.hashSync(password,salt); 
};

userSchema.methods.validatePassword= function(password){

    return  bcrypt.compareSync(password,this.hash);
};

userSchema.methods.generateAuthToken=function(){
    return jwt.sign({
        email: this.email,
        id: this._id,
      }, 'secret');   
};

function validateUser(user){
    const schema={
        email: Joi.string().min(8).max(50).email().required(),
        password: Joi.string().min(5).max(50).required(),
        fullName:Joi.string().min(5).max(50).required()
    }
};


const User=mongoose.model('User',userSchema);

exports.User=User;
exports.validateUser=validateUser;
