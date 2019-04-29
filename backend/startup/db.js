const mongoose=require('mongoose');
const logger=require('../logger');

const url = 'mongodb+srv://alaa:root@cluster0-lpfw1.mongodb.net/evensia?retryWrites=true';

module.exports=function(){
    mongoose.connect(url,{ useNewUrlParser: true })
    .then(()=> logger.info('Connected.....'))
    .catch((err)=> logger.error('Connection Failed....'));
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

}