import { View, Button } from "react-native";
import { socket } from "../socket";

interface Props {
  likes: number;
}

export default function LikeButton({ likes }: Props) {
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
