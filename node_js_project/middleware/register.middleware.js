const { body } = require('express-validator');
const { check } = require('express-validator/check');

const validationMiddleware = (req, res, next) => {
    console.log("middleware is working ");

    // this is for first_name
    req.check('first_name', 'Write a first_name').notEmpty();
    req.check('first_name', 'first_name must be 4 to 10 charaters').isLength({
        min: 4,
        max: 10
    });

    // this is for last_name
    req.check('last_name', 'Write a last_name').notEmpty();
    req.check('last_name', 'name must be 4 to 10charaters').isLength({
        min: 4,
        max: 10
    });


    // this is for email addresses
    req.check('email', 'Write a email').notEmpty();
    req.check('email', 'Invalid email address').isEmail();

    // this is for password 
    req.check('password', 'Password must be required').notEmpty();
    req.check('password', 'password length should be min 8 character  ').isLength({
        min: 8,
    });
    req.check('password', 'password must have at least one number').matches(/\d/);
    req.check('password', 'password must have at least one sepcial character').matches(/[!@#$%^&*(),.?":{}|<>]/);



    //check for errors
    const errors = req.validationErrors(body);

    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError });
    }

    next();
}

module.exports = { validationMiddleware }


