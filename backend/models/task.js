const mongoose=require('mongoose');
const Joi=require('joi');

const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    time:{
       type:String
    },
    done:{
        type: Boolean,
        default:false
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event',
        required:true
    }
});

const Task=mongoose.model('Task',taskSchema);

function validate_task(task){
    const schema={
        description:Joi.string().required().max(255),
        time:Joi.string(),
        done:Joi.Boolean(),
        eventId:Joi.objectId()
    };
    return Joi.validate(task,schema);
}

module.exports.Task=Task;
module.exports.validate_task=validate_task;