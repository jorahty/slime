import { Text, View } from "react-native";
import Constants from 'expo-constants';
import { socket } from "../socket";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

export default function TestConnection() {
  const [rand, setRand] = useState(0);
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState('');

  useEffect(function didMount() {
    socket.on('connect', () => {
      setError('');
    });
    
    socket.on('connect_error', (err: any) => {
      setError(err.message);
    });

    socket.on('update', (r: any, l: any) => {
      setRand(r);
      setLikes(l);
    });
  }, []);

  return (
    <View>
      <Text>
        socketEndpoint: {Constants.expoConfig?.extra?.socketEndpoint}
      </Text>
      <Text>
        rand: {rand}
      </Text>
      <Text>
        likes: {likes}
      </Text>
      <Text>
        {error ? `error: ${error}` : ''}
      </Text>
      <LikeButton likes={likes} />
    </View>
  );
}
