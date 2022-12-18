const User = require('../models/register.model');
const loginMiddlware = require('../middleware/login.middleware');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const { response } = require('express');


const getregister = async (req, res) => {

    try {
        const users = await User.find().select('_id name email')
        res.json(users);
    }
    catch (error) {
        res.json('message : Details not found in this fields');
    }
}
const getuser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select('name email password')
        res.status(200).json({
            message: "User details",
            details: user
        });
    }
    catch (error) {
        res.json('message : Details not found in this fields');
    }
}

const postregister = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findOne({ email: email }).then((user) => {
        if (!user) {
            try {

                const { name, email, _id } = User.create({
                    name: first_name + ' ' + last_name,
                    email: req.body.email,
                    password: hashedPassword,
                })

                return res.status(200).json({
                    message: "User details saved successfully",
                    // details: { email, name, _id }, // empty body showing in the response
                })
            } catch (error) {
                return res.status(500).json({
                    message: error.message
                });
            }

        } else {
            res.status(409).json({ message: 'Email already exists' })

        }

    })
}

const login = async (req, res) => {
    const { email, password } = req.headers;
    const user = await User.findOne({ email: email });
    console.log(user)
    if (!user) {
        res.status(404).json({
            message: 'User not found, please register and try again'
        })
    } else {
        const comparePassword = await bcrypt.compare(password, user.password)
        console.log(comparePassword)
        if (comparePassword) {
            res.status(200).json({
                message: 'Login successful'
            })
        } else {
            res.status(401).json({
                message: 'Invalid password'
            })
        }

    }
}




module.exports = { getregister, postregister, getuser, login }