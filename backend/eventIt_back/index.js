const express=require('express');
const mongoose=require('mongoose');
var app=express();

const events=require('./routes/events');

app.use(express.json());
app.use('/api/events',events);

mongoose.connect('mongodb://localhost/eventIT')
    .then(()=> console.log('Connected.....'))
    .catch((err)=> console.log('Connection Failed....',err));


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});