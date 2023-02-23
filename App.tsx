import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider, VStack, Center } from 'native-base';
import { SignIn } from './src/screens/public/SignIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn
      />

    </NativeBaseProvider>

  );
}
