const logger=require('../logger');


module.exports=function wrap(handler){
    return async (req,res)=>{
        try{
            await handler(req,res);
        }catch(err){
            res.status(500).send(err);
        }
    }
}