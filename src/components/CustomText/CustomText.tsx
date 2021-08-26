import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {IS_ANDROID} from '../../utils/constants';

interface Props {
  align: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color: string;
  size: number;
  space: number;
  //variant?: 'bold' | 'italic' | 'medium' | 'regular';
  variant?: keyof typeof fontVariant;
}

const fontVariant = {
  bold: IS_ANDROID ? 'Raleway-Bold' : 'Raleway Bold',
  italic: IS_ANDROID ? 'Raleway-Italic' : 'Raleway Italic',
  medium: IS_ANDROID ? 'Raleway-Medium' : 'Raleway Medium',
  regular: IS_ANDROID ? 'Raleway-Regular' : 'Raleway Regular',
};

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color: color,
    fontFamily: fontVariant[variant],
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const spaceLetters = (text: any, space: number) => {
  return text.split('').join('\u200A'.repeat(space));
};

const CustomText = ({align, children, color, size, space, variant}: Props) => {
  const textStyle = getTextStyle({align, color, size, variant});
  return (
    <Text allowFontScaling={false} style={textStyle}>
      {spaceLetters(children, space)}
    </Text>
  );
};

CustomText.defaultProps = {
  align: 'left',
  color: 'black',
  size: 32,
  space: 0,
  variant: 'regular',
};

export default CustomText;
