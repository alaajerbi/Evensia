const express=require('express');
const events=require('../routes/events');
const guests=require('../routes/guests');
const users=require('../routes/users');
const auth=require('../routes/auth');
const contacts=require('../routes/contacts');
const tasks=require('../routes/tasks');
const logger=require('../logger');

module.exports=function(app){
    app.use(express.json());
    app.use('/events',events);
    app.use('/guests',guests);  
    app.use('/users',users);
    app.use('/auth',auth);
    app.use('/contacts',contacts);
    app.use('/tasks',tasks);
} 