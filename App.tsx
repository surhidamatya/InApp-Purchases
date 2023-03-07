import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text>Open up App.tsx to start working on your appsd!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
