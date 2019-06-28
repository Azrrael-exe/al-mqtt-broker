const jwt = require('jsonwebtoken');
const settings = require('../config/settings')

module.exports = {
    token: (req, res, next) => {
        const token = jwt.sign({key: settings.KEY}, settings.SECRET);
        res.payload = {
            token
        }
        next();
    },
    testToken: (req, res, next) => {
        if(!req.body.token){
            const err = new Error("No token found!")
            err.status = 400
            return next(err);
        }
        const decoded = jwt.verify(req.body.token, settings.SECRET);
        console.log(decoded)
        res.payload = {
            key: decoded.key
        }
        next()
    }
}

