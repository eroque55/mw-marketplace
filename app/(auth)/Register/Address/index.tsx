import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import AuthBackground from '@/components/AuthBackground';
import GradientButton from '@/components/GradientButton';
import InputComponent from '@/components/InputComponent';
import RegisterAddressCity from '@/components/RegisterAddressCity';
import colors from '@/global/colors';
import { AddressForm, AddressSchema } from '@/validation/Register.validation';

const Address = () => {
  const router = useRouter();

  const { control, handleSubmit, watch, setValue } = useForm<AddressForm>({
    resolver: zodResolver(AddressSchema),
  });

  const city = watch('city');

  const onSubmit = (data: AddressForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.push('/(auth)/Register/PersonalData');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <AuthBackground style={{ gap: 40 }}>
        <Text className="text-text font-nunito_bold text-3xl w-full">
          Para começar, insira seu endereço
        </Text>

        <View className="flex-1 w-full gap-4">
          <InputComponent
            name="city"
            control={control}
            placeholder="Insira sua cidade"
            leftIcon={{ name: 'ArrowIcon', size: 20 }}
            style={{ color: colors.primary[100], paddingLeft: 30 }}
          />

          <InputComponent
            name="cep"
            control={control}
            label="CEP *"
            placeholder="Insira seu CEP"
            type="zip-code"
            options={{ mask: '99999-999' }}
          />

          <InputComponent
            name="address"
            control={control}
            label="Endereço *"
            placeholder="Insira seu endereço"
          />

          <InputComponent
            name="number"
            control={control}
            label="Número *"
            placeholder="Insira seu número"
            keyboardType="numeric"
          />

          <InputComponent
            name="complement"
            control={control}
            label="Complemento"
            placeholder="Insira seu complemento"
          />

          {!city && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              className="gap-2 absolute top-16 w-full h-full bg-white"
            >
              <RegisterAddressCity
                city="São Paulo, São Paulo, Brasil"
                description="Localização atual"
                setValue={setValue}
              />

              <RegisterAddressCity
                city="São Bernardo do Campo, São Paulo, Brasil"
                setValue={setValue}
              />

              <RegisterAddressCity
                city="Guarulhos, São Paulo, Brasil"
                setValue={setValue}
              />

              <RegisterAddressCity
                city="Osasco, São Paulo, Brasil"
                setValue={setValue}
              />

              <RegisterAddressCity
                city="Santo André, São Paulo, Brasil"
                setValue={setValue}
              />

              <RegisterAddressCity
                city="São Caetano do Sul, São Paulo, Brasil"
                setValue={setValue}
              />
            </Animated.View>
          )}
        </View>

        <GradientButton title="Continuar" onPress={handleSubmit(onSubmit)} />
      </AuthBackground>
    </KeyboardAwareScrollView>
  );
};

export default Address;
