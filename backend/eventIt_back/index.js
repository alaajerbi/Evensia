const express=require('express');
const logger=require('./logger');
var app=express();

require('./startup/routes')(app);
require('./startup/db')();

require('./config/passport');

app.listen(3000,()=>{
    logger.info('Listening on port 3000');
});
