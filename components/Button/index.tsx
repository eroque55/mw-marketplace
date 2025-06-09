import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '@/global/colors';

type Props = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  wired?: boolean;
} & TouchableOpacityProps;

const Button = ({
  title,
  backgroundColor = colors.primary[100],
  textColor = colors.white,
  wired = false,
  ...props
}: Props) => {
  const handleBackgroundColor = wired ? 'transparent' : backgroundColor;
  const handleTextColor = wired ? backgroundColor : textColor;

  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: handleBackgroundColor,
        borderColor: wired ? backgroundColor : 'transparent',
        borderWidth: wired ? 1 : 0,
      }}
      className="w-full h-14 rounded-full flex-row items-center justify-center"
    >
      <Text
        className="flex-1 font-nunito text-xl text-center"
        style={{ color: handleTextColor }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
