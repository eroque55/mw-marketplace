import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundImg, LogoBigImg } from '@/assets';
import { height, width } from '@/global/constants';

const Root = () => {
  const router = useRouter();
  const { top, left, bottom, right } = useSafeAreaInsets();

  const screenHeight = height + top + bottom;
  const screenWidth = width + left + right;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/OnBoarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1">
      <Image
        source={BackgroundImg}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
          top: -top,
        }}
      />

      <Animated.View
        entering={FadeIn.delay(500).duration(1000)}
        className="w-full h-full items-center justify-center"
      >
        <Image
          source={LogoBigImg}
          style={{ width: '80%', height: 120 }}
          contentFit="contain"
        />
      </Animated.View>
    </View>
  );
};

export default Root;
