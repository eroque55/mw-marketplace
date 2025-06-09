import { LinearGradient } from 'expo-linear-gradient';
import {
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '@/global/colors';

type Props = {
  title: string;
  backgroundColor?: ColorValue[];
  textColor?: string;
} & TouchableOpacityProps;

const GradientButton = ({
  title,
  backgroundColor = ['#8527E0', '#4C00DE'],
  textColor = colors.white,
  ...props
}: Props) => (
  <TouchableOpacity
    {...props}
    className="w-full h-14 rounded-full  overflow-hidden"
  >
    <LinearGradient
      colors={backgroundColor as any}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 flex-row items-center justify-center"
    >
      <Text
        className="flex-1 font-nunito text-xl text-center"
        style={{ color: textColor }}
      >
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default GradientButton;
