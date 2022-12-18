const { create } = require('domain');
const express = require('express');
const app = express();

const registerRouter = require('./routes/register.router');


//middleware middleware
app.use((req, res, next) => {
    next();
    console.log(`${req.method} ${req.url}`);
})

registerRouter.use(express.json());
app.use('/', registerRouter)
app.use('/register', registerRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`server listening on ${port}`);
})