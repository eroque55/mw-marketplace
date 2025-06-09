import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View } from 'react-native';

import { UserImg } from '@/assets';

import { IconComponent } from '../IconComponent';

const TabBar = () => {
  return (
    <LinearGradient
      colors={['#8527E0', '#4C00DE']}
      className="absolute bottom-6 right-6 left-6 py-6 px-8 flex-row items-center justify-between"
      style={{ borderRadius: 999 }}
    >
      <View>
        <IconComponent name="HomeIcon" size={28} />
      </View>

      <TouchableOpacity>
        <IconComponent name="CategoriesIcon" size={28} />
      </TouchableOpacity>

      <TouchableOpacity>
        <IconComponent name="StackIcon" size={28} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={UserImg}
          style={{ width: 28, height: 28, borderRadius: 999 }}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TabBar;
