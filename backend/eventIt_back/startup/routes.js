const express=require('express');
const events=require('../routes/events');
const guests=require('../routes/guest');
const users=require('../routes/users');
const auth=require('../routes/auth');

module.exports=function(app){

    app.use(express.json());
    app.use('/events',events);
    app.use('/guests',guests);
    app.use('/users',users);
    app.use('/auth',auth);

}