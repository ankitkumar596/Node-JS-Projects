const userSchema = require('../models/userData');

//middlware function writing

function authenticateEmail(req, res, next) {
    let headers = req.headers;
    if (headers.email) {
        let email = headers.email;
        const regexe = '/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/';
        if (email == regexe) {
            next();
        }
    }
    res.status(401).send('email is not a valid')
}

const registerController = async (req, res, next) => {
    console.log(req.body);
    try {
        const name = req.body.firstname
        if (name.length <= 3) {
            return res.status(400).json({ message: "full name msut three letters" })
        }
        else {
            console.log(req.body);
            let savedData = await userSchema.create(req.body);
            res.send({
                message: 'successfully saved'
            });

        }   

    } catch (e) {
        console.error(e.message);
        res.status(404).send({
            message: "something went wrong"
        });
    }
    next();

};

async function getUser(req, res, next) {
    let data = req.query;
    let email = data.email;
    let userData = await userSchema.findOne();
    res.send(userData);
    next();
}

module.exports = {
    registerController, getUser, authenticateEmail
};