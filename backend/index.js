const express=require('express');
const logger=require('./logger');
var cors = require('cors');
var app=express();

app.use(cors());

require('./startup/routes')(app);
require('./startup/db')();


app.listen(3009,()=>{
    logger.info('Listening on port 3009');
});
