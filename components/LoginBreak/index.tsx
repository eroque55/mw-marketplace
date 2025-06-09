import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

import colors from '@/global/colors';

const LoginBreak = () => {
  return (
    <View className="w-full items-center justify-center gap-2 flex-row">
      <LinearGradient
        colors={[colors.primary[100], colors.white]}
        style={{ width: 100, height: 1 }}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      />

      <Text className="text-primary-100 font-nunito text-base"> ou </Text>

      <LinearGradient
        colors={[colors.primary[100], colors.white]}
        style={{ width: 100, height: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    </View>
  );
};

export default LoginBreak;
