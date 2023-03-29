import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import { socket } from './socket';
import Constants from 'expo-constants';

import LikeButton from './components/LikeButton';

export default function App() {
  const [rand, setRand] = useState(0);
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState('');

  useEffect(function didMount() {
    socket.on('connect', err => {
      setError('');
    });
    
    socket.on('connect_error', err => {
      setError(err.message);
    });

    socket.on('update', (r, l) => {
      setRand(r);
      setLikes(l);
    });
  }, []);

  return (
    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff' }}>
        socketEndpoint: {Constants.expoConfig.extra.socketEndpoint}
      </Text>
      <Text style={{ color: '#fff' }}>
        rand: {rand}
      </Text>
      <Text style={{ color: '#fff' }}>
        likes: {likes}
      </Text>
      <Text style={{ color: '#fff' }}>
        {error ? `error: ${error}` : ''}
      </Text>
      <LikeButton likes={likes} />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
