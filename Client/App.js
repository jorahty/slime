import { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import io from 'socket.io-client';

const socketEndpoint = Constants.expoConfig.extra.socketEndpoint;

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
  }, []);

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff' }}>
        socketEndpoint: {socketEndpoint}
      </Text>
      <Text style={{ color: '#fff' }}>
        rand: {rand}
      </Text>
      <Text style={{ color: '#fff' }}>
        {error ? `error: ${error}` : ''}
      </Text>
    </SafeAreaView>
  );
}
