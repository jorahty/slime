import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import CanvasContainer from './components/Canvas/Container';
import TestConnection from './components/TestConnection';

export default function App() {
  return (
    <SafeAreaView>
      <CanvasContainer />
      <TestConnection />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
