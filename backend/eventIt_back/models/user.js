const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema=mongoose.Schema({
    email:String,
    hash:String
});

userSchema.methods.setPassword=async function(password){
    const salt=await bcrypt.genSalt(10);
    this.hash=await bcrypt.hash(password,salt);
};

userSchema.methods.validatePassword=async function(password){
    return await bcrypt.compare(password,this.hash);
};

userSchema.methods.generateJWT=function(){
    return jwt.sign({
        email: this.email,
        id: this._id,
      }, 'secret');   
};

userSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
};

const User=mongoose.model('User',userSchema);

module.exports=User;
