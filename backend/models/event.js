const mongoose=require('mongoose');
const Joi=require('joi');

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
       type:Date,
       required:true 
    },
    designColor:{
        type:String
    },
    img:{
        type:String
    },
    location: {
        type: String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

const Event=mongoose.model('Event',eventSchema);

function validate_event(event){
    const schema={
        name : Joi.string().required(),
        description:Joi.string().max(255),
        date:Joi.string().required(),
        designColor:Joi.string(),
        location: Joi.string()
    };
    return Joi.validate(event,schema);
}

module.exports.Event=Event;
module.exports.validate_event=validate_event;