import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import SectionItem from '../SectionItem';

interface Props {
  title?: string;
  data?: string[];
}

const HomeSection = ({ title = 'Notebooks', data = [] }: Props) => {
  return (
    <View className="py-6 gap-4">
      <View className="px-6 flex-row items-center justify-between">
        <Text className="font-nunito text-base text-gray">{title}</Text>
        <TouchableOpacity>
          <Text className="font-nunito text-sm text-gray">Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4 px-6"
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <SectionItem image={item} />}
      />
    </View>
  );
};

export default HomeSection;
