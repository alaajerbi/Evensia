const mongoose=require('mongoose');


module.exports=function(){
    mongoose.connect('mongodb://localhost/evensia',{ useNewUrlParser: true })
    .then(()=> console.log('Connected.....'))
    .catch((err)=> console.logg('Connection Failed....'));
    mongoose.set('useCreateIndex', true);
}