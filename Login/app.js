const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/register');
const expressValidator = require('express-validator');
const app = express();  

const { middleware } = require('./middleware/read.middleware');

app.get('/accept-version', middleware, (req, res) => {
    res.status(200).send({
        message: "you have successfully entered the version name"
    })
})


// database connection
mongoose.connect('mongodb://localhost:27017/registerUser', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connection established to Mongodb');
}).catch(() => {
    console.log('Failed to connect to Mongodb');
})

// middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(expressValidator());


app.use('/user', router);



// server connection
app.listen(3000, () => {
    console.log('server is listening on port 3000');
})










