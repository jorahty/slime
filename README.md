# Slime

This project has two parts:
1. Server using Socket.io and Matter.js (intended for deployment to Replit)
2. Client using Expo & React Native

## Usage

The Client uses `process.env.SOCKET_ENDPOINT` so be sure to set the enviroment variable:
```
export SOCKET_ENDPOINT="https://slime.jorahty.repl.co"
```
The Server listens on port 3000, so when developing locally, I either set the
socket endpoint to `http://localhost:3000` or to the IP address of my machine
(which I get with `ipconfig getifaddr en0`) e.g `http://172.19.248.44:3000`.

- Install node packages: `npm install`
- Start Server: `cd Server && npm start`
- Start Client: `cd Client && npm start`

## Todo

- Refresh your memory about how things are working, Assert that socket can be used by distant components
- Setup git repo, Assert that deployment to replit works, Make template, Get a stable, production feeling github workflow thing going
- read from .env instead of environment
- Start drawing shapes on the Client
- Setup Matter.js on the Server
- Start rendering state from Matter.js world on Server
- eslint
- basic tests — start very basic. just something that proves everything isn't entirely broken and has some code coverage
