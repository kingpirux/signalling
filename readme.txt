*********************************************
* Construct 2 Multiplayer Signalling Server *
*********************************************

Description
===========

The Construct 2 Multiplayer Signalling Server helps peers using the Construct 2 Multiplayer object find and connect to each other. The signalling server does not relay any actual game data: it merely relays connection details so that peers can make direct connections to each other, and the actual gameplay data travels over those peer-to-peer connections, not via the signalling server. As a result bandwidth requirements should be minimal. For more information about the architecture of the multiplayer engine, see: https://www.scirra.com/tutorials/892/multiplayer-tutorial-1-concepts

Scirra hosts a free official signalling server at wss://multiplayer.scirra.com, running on a high-end dedicated server with a gigabit connection. If this is suitable for your needs, you do not need to run your own signalling server.

The signalling server does not employ any STUN or TURN functionality. Some public STUN servers hosted by Google and Mozilla are built in to the Multiplayer engine and set as defaults on the server to help peers connect through NAT devices. The public STUN servers should be adequate for any online use and there is probably no point in running your own additional STUN servers. If you wish to host a TURN server you will need to find TURN server software separately and configure and host that as well. Additional STUN/TURN servers can be specified in config.js.

The signalling server runs using node.js. Signalling data is transmitted over WebSockets (whereas gameplay data is sent over WebRTC datachannels).


Installing
==========

Install node.js from http://nodejs.org/ for Windows, Mac or Linux.

Once installed, install the dependencies with:

npm install ws
npm install colors


Configuring
===========

Before running your server, review config.js in a text editor. The comments in the file describe each option and how to set it. For the server to be useful you will have to at least change the server_host to something other than "localhost" for the server to be reachable from other systems.

It is also strongly recommended to use an SSL certificate to encrypt the WebSocket connection to the signalling server. This is not just for security: some buggy middleboxes in use on the Internet don't yet understand WebSockets, try to interpret it as HTTP web traffic, and then break it. Encrypting the connection prevents these buggy devices from manipulating and possibly breaking the WebSocket. In short, using an encrypted WebSocket improves the chance that users will be able to connect to it. The official Scirra signalling server at wss://multiplayer.scirra.com is encrypted, so note if you are running a public unencrypted server, it is unlikely to be as useful as the official one.

Note if you change the contents of config.js, you will need to restart the server for the changes to take effect. Restarting the server will disconnect all connected clients.


Running
=======

Simply the following command from a terminal (or command prompt on Windows) in the directory of the signalling server:

node sigserv.js

To connect to the signalling server from Construct 2, use ws:// (for unencrypted connections) or wss:// (for encrypted connections) followed by the host name, and optionally the port if it is not the default for ws:// or wss:// (but note it is strongly recommended to use the default ports, again for connectivity reasons). Some possible examples:

ws://example.com
ws://12.34.56.78
wss://example.com
wss://example.com:4443

A server can also be run on local area networks (LANs) where none of the systems on the network are connected to the Internet. In this case no STUN or TURN servers are necessary, encryption is not necessary, and the server_host can be a local network IP address instead of a publicly reachable Internet server.