import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundImg, LogoSmallImg, OnBoardingImg } from '@/assets';
import Button from '@/components/Button';
import colors from '@/global/colors';
import { height, width } from '@/global/constants';

const OnBoarding = () => {
  const router = useRouter();
  const { top, left, bottom, right } = useSafeAreaInsets();

  const screenHeight = height + top + bottom;
  const screenWidth = width + left + right;

  const handleNavigate = () => {
    router.navigate('/(auth)/Login');
  };

  return (
    <View className="flex-1 items-center justify-between px-10 py-24">
      <Image
        source={BackgroundImg}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
          top: -top,
        }}
      />

      <Image
        source={LogoSmallImg}
        style={{ width: 75, height: 40 }}
        contentFit="contain"
      />

      <Text className="text-heading font-nunito_bold text-4xl">
        Marketplace {'\n'}Inteligente para você
      </Text>

      <Image
        source={OnBoardingImg}
        style={{ width: '100%', height: 360 }}
        contentFit="contain"
      />

      <Button
        title="Continuar"
        onPress={handleNavigate}
        backgroundColor={colors.white}
        textColor={colors.text}
      />
    </View>
  );
};

export default OnBoarding;
