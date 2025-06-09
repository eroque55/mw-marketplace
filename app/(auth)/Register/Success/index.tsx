import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import { SuccessImg } from '@/assets';
import AuthBackground from '@/components/AuthBackground';
import GradientButton from '@/components/GradientButton';

const Success = () => {
  const router = useRouter();

  return (
    <AuthBackground style={{ justifyContent: 'space-between' }}>
      <Image
        source={SuccessImg}
        style={{
          width: '100%',
          height: 300,
        }}
        contentFit="contain"
      />

      <View className="w-full items-center gap-3">
        <Text className="text-primary-100 font-nunito_bold text-3xl w-full text-center">
          Seu perfil foi criado com sucesso!
        </Text>
        <Text className="text-text font-nunito text-base w-full text-center">
          Realize o login com as credenciais inseridas nos passos anteriores.
        </Text>
      </View>

      <GradientButton
        title="Entrar"
        onPress={() => router.dismissTo('/(auth)/Login')}
      />
    </AuthBackground>
  );
};

export default Success;
