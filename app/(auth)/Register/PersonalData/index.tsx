import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AuthBackground from '@/components/AuthBackground';
import GradientButton from '@/components/GradientButton';
import InputComponent from '@/components/InputComponent';
import {
  PersonalDataForm,
  PersonalDataSchema,
} from '@/validation/Register.validation';

const PersonalData = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm<PersonalDataForm>({
    resolver: zodResolver(PersonalDataSchema),
  });

  const onSubmit = (data: PersonalDataForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.push('/(auth)/Register/Photo');
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
          Insira seus dados pessoais
        </Text>

        <View className="flex-1 w-full gap-4">
          <InputComponent
            name="firstName"
            control={control}
            label="Nome *"
            placeholder="Insira seu nome"
          />

          <InputComponent
            name="lastName"
            control={control}
            label="Sobrenome *"
            placeholder="Insira seu sobrenome"
          />

          <InputComponent
            name="celphone"
            control={control}
            label="Celular *"
            placeholder="Insira seu celular"
            keyboardType="phone-pad"
            type="cel-phone"
            options={{ mask: '(99) 99999-9999' }}
          />

          <InputComponent
            name="phone"
            control={control}
            label="Telefone"
            placeholder="Insira seu telefone"
            keyboardType="phone-pad"
            type="cel-phone"
            options={{ mask: '(99) 9999-9999' }}
          />
        </View>

        <GradientButton title="Continuar" onPress={handleSubmit(onSubmit)} />
      </AuthBackground>
    </KeyboardAwareScrollView>
  );
};

export default PersonalData;
