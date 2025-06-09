import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';

import { IconComponent } from '../IconComponent';

interface Props {
  title: string;
}

const HomeHeader = ({ title }: Props) => {
  return (
    <View className="w-full flex-row items-center justify-between p-6">
      <Text className="font-nunito text-3xl text-text ">{title}</Text>
      <TouchableOpacity>
        <IconComponent name="ShopBagIcon" size={24} />
        <LinearGradient
          colors={['#8527E0', '#4C00DE']}
          className="absolute -top-2 -right-2 w-5 h-5 items-center justify-center"
          style={{ borderRadius: 999 }}
        >
          <Text className="font-nunito text-sm text-white">2</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
