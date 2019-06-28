const jwt = require('jsonwebtoken');
const settings = require('../config/settings')

module.exports = {
    authenticate : (client, username, password, callback) => {
        console.log(username)
        if(!password){
            return callback(null, false)
        }
        // const decoded = jwt.verify(password.toString(), settings.SECRET);
        if(settings.KEY == password.toString()){
            return callback(null, true)
        }        
        return callback(null, false)
    },
    authorizePublish : (client, topic, payload, callback) => {
      return callback(null, true);
    },
    authorizeSubscribe : (client, topic, callback) => {
        return callback(null, true);
    }
}