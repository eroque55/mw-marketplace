import { zodResolver } from '@hookform/resolvers/zod';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import AuthBackground from '@/components/AuthBackground';
import Button from '@/components/Button';
import GradientButton from '@/components/GradientButton';
import { IconComponent } from '@/components/IconComponent';
import colors from '@/global/colors';
import { PhotoForm, PhotoSchema } from '@/validation/Register.validation';

const Photo = () => {
  const router = useRouter();

  const { handleSubmit, setValue, watch, formState } = useForm<PhotoForm>({
    resolver: zodResolver(PhotoSchema),
  });

  const onSubmit = (data: PhotoForm) => {
    console.log(JSON.stringify(data, null, 2));
    router.push('/(auth)/Register/Success');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      aspect: [1, 1],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      setValue('photo', selectedImage.uri);
    }
  };

  const photo = watch('photo');

  return (
    <AuthBackground style={{ gap: 40 }}>
      <Text className="text-text font-nunito_bold text-3xl w-full">
        Para finalizar, insira uma foto de perfil
      </Text>

      <View className="flex-1 items-center gap-4">
        <View>
          <LinearGradient
            colors={['#8527E0', '#4C00DE']}
            style={{
              borderRadius: 999,
            }}
            className="h-16 w-16 absolute top-0 right-0"
          />
          <LinearGradient
            colors={['#8527E0', '#4C00DE']}
            style={{
              borderRadius: 999,
            }}
            className="h-16 w-16 absolute bottom-0 left-0"
          />
          <TouchableOpacity
            className="w-52 h-52 rounded-full overflow-hidden bg-heading items-center justify-center"
            onPress={pickImage}
          >
            {photo ? (
              <Image
                source={{ uri: photo }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              <IconComponent name="ProfilePlaceholderIcon" size={40} />
            )}
          </TouchableOpacity>
        </View>

        <View className="items-center w-full gap-2">
          <Text
            className="font-nunito text-base"
            style={{
              color: formState.errors.photo ? colors.red : colors.highlight,
            }}
          >
            Selecionar foto de perfil
          </Text>

          {photo && (
            <TouchableOpacity onPress={() => setValue('photo', '')}>
              <Text className="text-red font-nunito text-sm">Remover foto</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View className="w-full gap-4">
        <Button
          wired
          title="Pular essa etapa"
          backgroundColor={colors.highlight}
          onPress={() => router.push('/(auth)/Register/Success')}
        />

        <GradientButton title="Continuar" onPress={handleSubmit(onSubmit)} />
      </View>
    </AuthBackground>
  );
};

export default Photo;
