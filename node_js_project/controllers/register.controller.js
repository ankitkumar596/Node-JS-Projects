const registeredUser = require("../models/user.model")


function getUser(req, res) {
    res.status(200).json('this is home page')
}

function getUsers(req, res) {
    res.status(200).json(registeredUser)
}

function postUser(req, res) {
    try {
        if (!req.body.firstName && !req.body.lastName) {
            return res.status(404).json({ error: " please enter first name and last name" })
        }
        const newRegister = {
            id: registeredUser.length,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
        registeredUser.push(newRegister);
        res.json(newRegister)
    }
    catch (err) {
        console.error(err)
    }

}

function getId(req, res) {
    const registerID = Number(req.params.registerID)
    const newID = registeredUser[registerID];
    if (newID) {
        res.json(newID)
    } else {
        res.status(404).json({ error: "Please enter valid ID" })
    }

}


module.exports = {
    getUser,
    getUsers,
    postUser,
    getId
}