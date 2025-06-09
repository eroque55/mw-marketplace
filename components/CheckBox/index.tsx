import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

interface Props {
  isChecked?: boolean;
}

const CheckBox = ({ isChecked = false }: Props) => {
  return (
    <View
      className="w-5 h-5 rounded-full overflow-hidden border-neutral-300"
      style={{ borderWidth: isChecked ? 0 : 1 }}
    >
      {isChecked && (
        <LinearGradient
          colors={['#8527E0', '#4C00DE']}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </View>
  );
};

export default CheckBox;
