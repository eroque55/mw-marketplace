import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Animated, { LinearTransition } from 'react-native-reanimated';

import AuthBackground from '@/components/AuthBackground';
import CheckBox from '@/components/CheckBox';
import GradientButton from '@/components/GradientButton';
import InputComponent from '@/components/InputComponent';
import LoginBreak from '@/components/LoginBreak';
import SocialMediaButton from '@/components/SocialMediaButton';
import { LoginForm, LoginSchema } from '@/validation/Login.validation';

const Login = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const { control, handleSubmit, setValue } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    setValue('rememberMe', rememberMe);
  }, [rememberMe]);

  const onSumbit = (data: LoginForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.push('/(main)/Home');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <AuthBackground style={{ justifyContent: 'space-between' }}>
        <Text className="text-text font-nunito_bold text-3xl w-full">
          Bem-vindo de volta{'\n'}
          sentimos sua falta
        </Text>

        <View className="w-full gap-3">
          <InputComponent
            label="E-mail"
            placeholder="Insira seu e-mail"
            control={control}
            name="email"
            keyboardType="email-address"
          />
          <InputComponent
            label="Senha"
            placeholder="Insira sua senha"
            control={control}
            name="password"
            password
          />

          <Animated.View
            className="flex-row items-center justify-between"
            layout={LinearTransition}
          >
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <CheckBox isChecked={rememberMe} />
              <Text className="font-nunito text-sm text-text">
                Lembrar de mim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/(auth)/ForgotPassword')}
            >
              <Text className="font-nunito_bold text-sm text-primary-100">
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View className="w-full gap-6" layout={LinearTransition}>
          <GradientButton
            title="Fazer login"
            onPress={handleSubmit(onSumbit)}
          />

          <LoginBreak />

          <View className="flex-row items-center justify-center gap-12">
            <SocialMediaButton icon="GoogleIcon" />
            <SocialMediaButton icon="FacebookIcon" />
            <SocialMediaButton icon="AppleIcon" />
          </View>
        </Animated.View>

        <View className="w-full flex-row items-center justify-center gap-1">
          <Text className="font-nunito text-base text-text">Novo usuário?</Text>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/Register/Address')}
          >
            <Text className="text-primary-100 font-nunito_bold">
              Crie uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </AuthBackground>
    </KeyboardAwareScrollView>
  );
};

export default Login;
