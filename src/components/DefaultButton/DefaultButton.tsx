import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from '../CustomText';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  small?: boolean;
  text?: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ additionalStyle, small, onPress, text, textSize, variant = 'primary' }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle, small ? styles.small : null]}
      onPress={onPress}
    >
      <CustomText color={buttonTextColors[variant]} size={textSize}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 14,
  variant: 'primary',
};

export default DefaultButton;
