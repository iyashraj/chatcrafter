const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet')
const compression = require('compression');

app.use(bodyParser.json()); // parsing incoming json
app.use(bodyParser.urlencoded({extended:true})); // parsing incoming url-encoded data
app.use(cors()) // for handling cors
app.use(morgan('dev')) // Logs HTTP requests in development mode
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  });
app.use(limiter); // handle the no of request limits
app.use(helmet()) // will set multiple http headers
app.use(compression()); // will compress response bodies
app.use(express.static('public')); // handling serving static files eg. image, css 


app.listen(4000, ()=>{
    console.log("serving is running on the given port")
})