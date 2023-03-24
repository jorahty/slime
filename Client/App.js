import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import { socket } from './socket';

export default function App() {
  const [rand, setRand] = useState(0);
  const [error, setError] = useState('');

  useEffect(function didMount() {
    socket.on('update', n => {
      setRand(n);
    });

    socket.on('connect_error', err => {
      setError(err.message);
    });
  }, []);

  return (
    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff' }}>
        rand: {rand}
      </Text>
      <Text style={{ color: '#fff' }}>
        {error ? `error: ${error}` : ''}
      </Text>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
