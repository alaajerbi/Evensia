const mongoose=require('mongoose');
const logger=require('../logger');


module.exports=function(){
    mongoose.connect('mongodb://localhost/evensia',{ useNewUrlParser: true })
    .then(()=> logger.info('Connected.....'))
    .catch((err)=> logger.error('Connection Failed....'));
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

}