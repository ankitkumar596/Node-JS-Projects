const loginMiddlware = (req, res, next) => {
    // console.log('middleware is working...');
    const { email, password } = req.headers;
    if (!email || !password) {
        return res.status(401).send('email and password required');
    }
    

    next();
}

module.exports = { loginMiddlware }