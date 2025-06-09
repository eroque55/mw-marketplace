import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import AuthBackground from '@/components/AuthBackground';
import GradientButton from '@/components/GradientButton';
import InputComponent from '@/components/InputComponent';
import {
  ForgotPasswordForm,
  ForgotPasswordSchema,
} from '@/validation/Login.validation';

const ForgotPassword = () => {
  const router = useRouter();

  const onSumbit = (data: ForgotPasswordForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.replace('/(auth)/ConfirmEmail');
  };

  const { control, handleSubmit } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  return (
    <AuthBackground style={{ gap: 40 }}>
      <Text className="text-text font-nunito_bold text-3xl w-full">
        Esqueceu a senha?
      </Text>

      <Text className="text-text font-nunito text-base w-full">
        Digite seu e-mail abaixo para receber as instruções de redefinição de
        senha.
      </Text>

      <View className="w-full">
        <InputComponent
          label="E-mail"
          placeholder="Insira seu e-mail"
          control={control}
          name="email"
          keyboardType="email-address"
        />
      </View>

      <Animated.View className="w-full" layout={LinearTransition}>
        <GradientButton
          title="Recuperar senha"
          onPress={handleSubmit(onSumbit)}
        />
      </Animated.View>
    </AuthBackground>
  );
};

export default ForgotPassword;
