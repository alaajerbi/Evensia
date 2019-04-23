const mongoose=require('mongoose');
const Joi=require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const guestSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    tel:{
        type:String
    },
    present:{
       type:Boolean,
       default:false 
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    gender:{
        type :String,
        required:true
    }
});

const Guest=mongoose.model('Guest',guestSchema);

function validate_guest(guest){
    const schema={
        name : Joi.string().required(),
        description:Joi.string().max(255),
        tel:Joi.string().required(),
        present:Joi.boolean(),
        eventId:Joi.objectId(),
        gender:Joi.string().required()
    };
    return Joi.validate(guest,schema);
}

module.exports.Guest=Guest;
module.exports.validate_guest=validate_guest;