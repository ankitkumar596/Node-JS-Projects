
const middleware = (req, res, next) => {
    console.log('middleware is working...');
    const token = req.headers['accept-version'];
    const { headers } = req;
    console.log(headers);
    const { "accept-version": acceptVersion } = headers;
    console.log(acceptVersion);

    console.log(token);
    if (!token) {
        return res.status(401).send('version key not found')
    }
    if (token !== '1.0.0') {
        return res.status(401).send(' version mismatch');
    }
    next();
}
module.exports = { middleware }




