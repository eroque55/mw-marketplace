import { Image } from 'expo-image';
import { useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';

import { CarouselImg } from '@/assets';
import colors from '@/global/colors';
import { width } from '@/global/constants';

const DATA = [
  {
    id: 1,
    image: CarouselImg,
  },
  {
    id: 2,
    image: CarouselImg,
  },
  {
    id: 3,
    image: CarouselImg,
  },
  {
    id: 4,
    image: CarouselImg,
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setIndex(currentIndex);
  };

  return (
    <View className="w-full h-40">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={DATA}
        keyExtractor={item => String(item.id)}
        renderItem={item => (
          <Image source={item.item.image} style={{ width, height: 160 }} />
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
      />
      <View className="absolute bottom-2 left-0 right-0 flex-row items-center justify-center gap-1">
        {DATA.map((item, i) => (
          <View
            key={item.id}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor:
                i === index ? colors.secondary[100] : colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
