# Slime

This project has two parts that communicate using Socket.io:
1. `Server` using Matter.js (intended for deployment to Replit)
2. `Client` using Expo & React Native

## Usage

Create `Client/.env` and set the socket endpoint:
```
SOCKET_ENDPOINT="https://slime.jorahty.repl.co"
```
The server listens on port 3000, so I either set the socket endpoint to the
Repl's URL (`https://slime.jorahty.repl.co`), to `http://localhost:3000`, or
using the IP address of my machine (which I get with `ipconfig getifaddr en0`)
e.g `http://172.19.248.44:3000`.

- Install node packages: `npm install`
- Start the server: `cd Server && npm start`
- Start the client: `cd Client && npm start`

## Todo

- Setup git repo, Assert that deployment to replit works, Make template, Get a stable, production feeling github workflow thing going
- Check performance on replit
- Start drawing shapes on the Client
- Setup Matter.js on the Server
- Start rendering state from Matter.js world on Server
- eslint
- basic tests — start very basic. just something that proves everything isn't entirely broken and has some code coverage
- github workflow checks
- render table of connected users to server terminal output
