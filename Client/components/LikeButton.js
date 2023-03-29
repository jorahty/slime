import { View, Button } from "react-native";
import { socket } from "../socket";

export default function LikeButton({ likes }) {
  return (
    <View>
      <Button
        onPress={() => {
          socket.emit('like');
        }}
        title={`❤️ Like (${likes})`}
      />
    </View>
  );
}
