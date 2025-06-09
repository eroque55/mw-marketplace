import { useState } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import colors from '@/global/colors';

import { IconComponent, IconComponentProps } from '../IconComponent';

type Props<TFieldValues extends FieldValues> = {
  label?: string;
  password?: boolean;
  placeholder?: string;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  leftIcon?: IconComponentProps;
} & TextInputProps &
  UseControllerProps<TFieldValues>;

const InputComponent = <TFieldValues extends FieldValues>({
  label,
  password,
  placeholder,
  type,
  options,
  control,
  name,
  autoCapitalize = 'none',
  multiline = false,
  leftIcon,
  ...props
}: Props<TFieldValues>) => {
  const [passwordHidden, setPasswordHidden] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  if (!control) {
    throw new Error('Control was not passed as a prop');
  }

  if (!name) {
    throw new Error('Name was not passed as a prop');
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    field.onBlur();
    props.onBlur?.(e);
  };

  const handleBorderColor = () => {
    if (isFocused) {
      return colors.primary[100];
    }
    if (error?.message) {
      return colors.red;
    }
    return colors.primary[25];
  };

  return (
    <Animated.View layout={LinearTransition}>
      {label && (
        <Text className="font-nunito_bold text-gray text-base">{label}</Text>
      )}

      <View className="gap-1">
        <View
          style={{
            borderColor: handleBorderColor(),
          }}
          className="flex-row items-center border-b"
        >
          {leftIcon && (
            <View className="absolute left-0 top-2.5">
              <IconComponent
                {...leftIcon}
                fill={isFocused ? colors.primary[100] : '#BABABA'}
              />
            </View>
          )}

          {type ? (
            <TextInputMask
              style={{
                flex: 1,
                fontFamily: 'Nunito_400Regular',
                fontSize: 16,
                color: colors.text,
                lineHeight: 24,
                paddingRight: password ? 3 : undefined,
                paddingLeft: leftIcon ? 30 : undefined,
              }}
              onChangeText={field.onChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={field.value}
              refInput={field.ref}
              type={type}
              secureTextEntry={passwordHidden}
              placeholder={placeholder}
              placeholderTextColor={colors.highlight}
              options={options}
              multiline={multiline}
              {...props}
            />
          ) : (
            <TextInput
              style={{
                paddingRight: password ? 32 : undefined,
                paddingLeft: leftIcon ? 30 : undefined,
              }}
              className="flex-1 font-nunito text-base text-text"
              onChangeText={field.onChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              secureTextEntry={passwordHidden}
              placeholder={placeholder}
              autoCapitalize={autoCapitalize}
              placeholderTextColor={colors.highlight}
              value={field.value}
              multiline={multiline}
              {...props}
            />
          )}

          {password && (
            <TouchableOpacity
              className="justify-center items-center absolute right-0"
              onPress={() => setPasswordHidden(!passwordHidden)}
            >
              <IconComponent
                name={
                  passwordHidden
                    ? 'PasswordEyeInactiveIcon'
                    : 'PasswordEyeActiveIcon'
                }
                size={25}
              />
            </TouchableOpacity>
          )}
        </View>
        {error?.message && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Text className="font-nunito_bold text-red text-xs">
              {error.message}
            </Text>
          </Animated.View>
        )}
      </View>
    </Animated.View>
  );
};

export default InputComponent;
