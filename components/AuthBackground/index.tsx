import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

import { LogoGreenPurpleImg } from '@/assets';

import BackButton from '../BackButton';

const AuthBackground = ({
  children,
  ...props
}: PropsWithChildren<ViewProps>) => {
  return (
    <View className="w-screen h-screen items-center px-7 p-12" {...props}>
      <Image
        source={LogoGreenPurpleImg}
        style={{ width: 80, height: 35 }}
        contentFit="contain"
      />

      <BackButton className="absolute left-7 top-16" />

      {children}
    </View>
  );
};

export default AuthBackground;
