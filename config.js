module.exports = {

	// Host address for the server. To create a publicly accessible signalling server this will
	// need to be a public Internet-facing non-translated IP address of the local server.
	server_host: "localhost",
	
	// Optional override of server port. It is strongly recommended not to specify this. The server
	// will use port 80 without SSL and port 443 with SSL, which are standard ports. Choosing a
	// non-standard port may cause some firewalls, routers or NAT devices to block the connection.
	
	//server_port: 80,
	
	// SSL configuration. Use of SSL is strongly recommended. Due to some firewalls, routers or
	// NAT devices in use on the Internet, insecure WebSocket connections may not be able to connect
	// where a secure WebSocket connection can. Encryption prevents buggy packet-inspecting
	// middleboxes from meddling with the traffic on the assumption port 80 is HTTP web traffic.
	ssl: true,
	ssl_key: "ssl.key",		// path to key file
	ssl_cert: "ssl.pem",		// path to certificate
	
	// Server name, operator and "message of the day". These can be anything you like and are reported
	// through the Multiplayer object's expressions upon connecting. Note the server must be restarted
	// for any of these changes to take effect.
	server_name: "My Multiplayer Signalling Server",
	server_operator: "MyCompany",
	server_motd: "Welcome to the MyCompany Multiplayer Signalling server!",
	
	// ICE (Interactive Connectivity Establishment) servers. These are STUN or TURN servers that
	// can help clients connect through routers, firewalls and other NAT devices. The signalling
	// server can send additional ICE servers to connecting clients for them to make use of if
	// necessary. Any servers added here will be usable by any client connecting to this signalling
	// server. In contrast the "Add ICE server" action in the Multiplayer object applies only to
	// that particular project.
	ice_servers: [
		"stun:stun.l.google.com:19302",		// Google-operated public STUN servers
		"stun:stun1.l.google.com:19302",
		"stun:stun2.l.google.com:19302",
		"stun:stun3.l.google.com:19302",
		"stun:stun4.l.google.com:19302",
		"stun:23.21.150.121"				// Mozilla-operated public STUN server
		
		// To specify a server with a username and credential (commonly used by TURN servers),
		// instead of a string use an object in this format:
		// (note this format is only supported by r177+)
		/*
		{
			"urls": "turn:example.org",
			"username": "myusername",
			"credential": "mycredential"
		}
		*/
	],
	
	// All the below defaults are recommended values. Do not change unless you have
	// good reasons.
	
	// The maximum number of connected clients before the server will start rejecting
	// newly connecting clients as "server full".
	//max_clients: 100000,
	
	// Delay in ms to send a ping to a client if it has not been heard from in this time.
	// To ensure a high capacity of connected clients, it should be a long delay, otherwise
	// the bandwidth will be filled with constant ping requests.
	//ping_frequency: 10000,
	
	// Delay in ms in which if no response received (including to any pings) then the client
	// will be kicked as timed out. Recommended to be 2.5x the ping interval.
	//client_timeout: 25000,
	
	// Delay in ms in which if a client is connected and responding but idle (not in a game)
	// then the server will kick them as inactive. This prevents AFK clients accumulating
	// and wasting server resources.
	//inactive_timeout: 1200000,
	
	// Delay in ms in which peers must successfully connect to the room host when joining a game.
	// If the host does not confirm that they connected successfully in this time, the signalling
	// server will kick them from the room on the assumption the host is unreachable.
	//confirm_timeout: 20000,
	
	// If the room host fails to confirm a peer this many times, they are kicked from the room on
	// the assumption their network configuration is preventing anyone from connecting to them
	// at all. This prevents unreachable hosts blocking rooms permanently.
	//host_max_unconfirmed: 5,
	
	// Maximum number of inbound messages from a client per 'ping_frequency' interval . If this
	// is exceeded, the client is kicked for flooding. This helps avoid both deliberate abuse
	// as well as accidental bugs that inadvertently spam the server and risk draining its resources.
	//flood_limit: 200,
	
	// Number of characters to use in client ID strings. This should be as short as possible to
	// ensure low-bandwidth transmissions. Client IDs choose from 36 characters so 4 digits provides
	// 36 ^ 4 = ~1.6 million possibilities, far greater than 'max_clients'.
	//client_id_digits: 4,			// 36 ^ 4 = ~1.6m
	
	// Maximum allowed length of client aliases, to prevent trolls choosing extremely long names.
	//max_alias_length: 30,
	
	// Maximum allowed length of game, instance and room names, to prevent user-chosen names
	// trolling with extremely long names.
	//max_name_length: 100,
	
	// Maximum number of peers allowed per unique game (applying to all instances and rooms
	// therein), or 0 if unlimited.
	//max_game_peers: 0
};