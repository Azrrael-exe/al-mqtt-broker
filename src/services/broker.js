const mosca = require('mosca');
const auth = require('../utils/brokerAuth')
const settings = require('../config/settings')

const ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: settings.MONGO_URI + '/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};
const moscaSettings = {
  port: parseInt(settings.BROKER_PORT),
  backend: ascoltatore
};
const server = new mosca.Server(moscaSettings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

server.on('clientDisconnected', function(client){
  console.log(client.id + ' disconected')
})

server.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

server.on('subscribed', function(client, topic){
  console.log('subscribed')
})

server.on('unsuscribed', function(client, topic){
  console.log('unsuscribed')
})

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
  server.authenticate = auth.authenticate;
  server.authorizePublish = auth.authorizePublish;
  server.authorizeSubscribe = auth.authorizeSubscribe;
}

module.exports = server