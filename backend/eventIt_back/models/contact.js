const mongoose=require('mongoose');
const Joi=require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    email:{
        type:String,
    },
    tel:{
        type:Number
    },
    groupe:{
        type:String
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },

});

const Contact=mongoose.model('Contact',contactSchema);

function validate_contact(contact){
    const schema={
        name : Joi.string().required(),
        description:Joi.string().max(255),
        tel:Joi.number(),
        email:Joi.string().email(),
        groupe:Joi.string(),
        eventId:Joi.objectId().required(),

    };
    return Joi.validate(contact,schema);
}

module.exports.Contact=Contact;
module.exports.validate_contact=validate_contact;