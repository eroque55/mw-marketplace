import { useRouter } from 'expo-router';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { IconComponent } from '../IconComponent';

const BackButton = ({ onPress, ...props }: TouchableOpacityProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="w-9 h-9 items-center justify-center"
      onPress={onPress || router.back}
      {...props}
    >
      <IconComponent name="ChevronLeftIcon" size={20} />
    </TouchableOpacity>
  );
};

export default BackButton;
