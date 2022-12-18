const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()

const userSchema = require('./models/userData');
const registerRouter = require('./routes/register.router');
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

//database connection 
mongoose.connect('mongodb://localhost:27017/UserData', {
    useNewUrlParser: true
})
    .then(console.log("Monodb is connected successfully"))
    .catch(err => console.error(err));

// middlewareware



app.use(express.json());
app.use('/register', registerRouter);

// page not found route
app.get('/*', (req, res) => {
    res.status(404).send('whoops, page not found');
});

//server listening port is 9090
app.listen(9090, () => {
    console.log('server listening on port : 9090');
})

