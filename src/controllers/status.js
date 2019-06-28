const settings = require('../config/settings')

module.exports = {
    status: (req, res, next) => {
        res.payload = {
            version: settings.VERSION,
            deployed_at: settings.LAUNCH_AT
        }
        next()
    }   
}