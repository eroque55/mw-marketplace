import '@/global.css';

import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const RootLayout = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            animation: 'fade',
            animationDuration: 300,
            headerShown: false,
            contentStyle: {
              backgroundColor: 'white',
              paddingTop: top,
              paddingBottom: bottom,
              paddingLeft: left,
              paddingRight: right,
            },
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
