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

- `socket` can't be simply exported as a top-level constant because it needs to
  be torn down on unmount. Instead, it needs to be created and destroyed in a
  `useEffect`. Since it needs to be used by several compoenents, both for
  rendering and sending input, it needs to be provided via a global context provider.
- Setup `AppContextProvider` and `useAppContext`
- Assert that socket can be used by distant components
- Start drawing shapes on the Client
- Setup Matter.js on the Server
- Start rendering state from Matter.js world on Server
