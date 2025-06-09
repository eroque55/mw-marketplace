import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { shadow } from '@/global/shadow';

import { IconComponent, IconT } from '../IconComponent';

type Props = {
  icon: IconT;
} & TouchableOpacityProps;

const SocialMediaButton = ({ icon, ...props }: Props) => {
  return (
    <TouchableOpacity
      className="w-10 h-10 rounded-full items-center justify-center bg-white"
      style={shadow.default}
      {...props}
    >
      <IconComponent name={icon} size={20} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
