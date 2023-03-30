import io from 'socket.io-client';
import Constants from 'expo-constants';

const { socketEndpoint } = Constants.expoConfig.extra;

export const socket = io(socketEndpoint, {
  transports: ['websocket'],
});
