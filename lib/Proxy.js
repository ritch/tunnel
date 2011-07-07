// #Proxy
// ##Dependencies
var net = require('net'),
    _ = require('underscore');

// Passes anything it sees on a given port to a connected client.
exports = module.exports = function(port) {
	
	var client, servers = {};
	
	// ## Client
	// Start a private server and listen for a single connection.
	servers.priv = net.createServer(function (connection) {
	  if(client) {
	      // Refuse connection
	      
	  } else {
	      client = connection;
	  }
	});
	server.priv.listen(port);
	
	
	// ## Public
	// Start a public server and pass any requests to a single client.
	// Also push any data from the client to the server.

};