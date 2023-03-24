import { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import io from 'socket.io-client';

const socketEndpoint = "http://192.168.0.149:3000";
// const socketEndpoint = "https://replit-socketio-expo.jorahty.repl.co";

export default function App() {
  const [rand, setRand] = useState(0);
  const [error, setError] = useState('');

  useEffect(function didMount() {
    const socket = io(socketEndpoint, {
      transports: ["websocket"],
    });

    socket.on('update', n => {
      setRand(n);
    });

    socket.on('connect_error', err => {
      setError(err.message);
    });

    return function didUnmount() {
      socket.close();
      socket.disconnect();
      socket.removeAllListeners();
    };
  }, [])

  return (
    <SafeAreaView>
      <Text>
        rand: {rand}
      </Text>
      <Text>
        {error ? `error: ${error}` : ''}
      </Text>
    </SafeAreaView>
  );
}
