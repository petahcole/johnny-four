# Johnny Four Bot Live-Streaming Server

* This server is used to create a web socket connection for the Johnny-Four Bot live-streaming video feature. The bot uses a separate server to create another socket connection for keyboard drive controls here: https://github.com/Johnny-Four/control-server

### How It Works

* A basic Node.js Express server with a web socket connection to keep open a constant stream of video between the AngularJS frontend where the video shows and bot's remote Raspi-cam. When the user clicks "Start" in the web app browser, the video stream begins.

### Technologies
* Raspberry Pi, AngularJS, Node.js, Express, Knex.js,  Johnny-Five, Socket.io, h264 Live Player, Broadway.js\

### Note
* To make the Johnny Four robot drive and live stream, you need to SSH into our existing Pi and run both this server and the control server linked above.  A setup tutorial is coming soon for you do be able to build your own bot with your own pi!

### My role is this project

* This was a group project. The majority of what I worked on was the hardware aspect. Researching how to and wiring it up with another teammate. I also work with the rest of the team on troubleshooting our websocket connections and building some of the Angular front-end. I also working on how to drive it with the keypad.
