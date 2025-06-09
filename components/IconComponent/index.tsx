import { ViewStyle } from 'react-native';

import * as Icon from '@/assets/index';

export type IconT = keyof typeof Icon;

export interface IconComponentProps {
  name: IconT;
  size?: number;
  style?: ViewStyle;
  fill?: string;
}

export const IconComponent = ({
  name,
  size,
  style,
  fill = 'none',
}: IconComponentProps) => {
  if (name && !!Icon?.[name]) {
    return Icon[name]({
      width: size,
      height: size,
      style,
      fill,
    });
  }
};
