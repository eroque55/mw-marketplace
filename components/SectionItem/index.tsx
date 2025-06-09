import { Image } from 'expo-image';
import { Text, View } from 'react-native';

interface Props {
  image: string;
}

const SectionItem = ({ image }: Props) => {
  return (
    <View className="w-32 gap-1 items-center">
      <Image
        source={image}
        style={{ width: '100%', height: 100 }}
        contentFit="contain"
      />
      <Text numberOfLines={1} className="text-base font-nunito text-text">
        Lorem ipsum
      </Text>
      <Text numberOfLines={1} className="text-sm font-nunito text-gray">
        Lorem ipsum dolor sit
      </Text>
      <Text className="text-base font-nunito text-primary-100">
        R$ 1.000,00
      </Text>
    </View>
  );
};

export default SectionItem;
