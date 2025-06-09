import { UseFormSetValue } from 'react-hook-form';
import { Text, TouchableOpacity } from 'react-native';

import { AddressForm } from '@/validation/Register.validation';

interface Props {
  city: string;
  description?: string;
  setValue?: UseFormSetValue<AddressForm>;
}

const RegisterAddressCity = ({
  city,
  description = 'Localização aproximada',
  setValue,
}: Props) => {
  const handlePress = () => {
    if (setValue) {
      setValue('city', city);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className="text-primary-100 text-base font-nunito">{city}</Text>
      <Text numberOfLines={1} className="text-neutral-500 font-nunito text-sm">
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default RegisterAddressCity;
