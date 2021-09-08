import React from 'react';
import { Image, Modal, View } from 'react-native';
import CustomText from '../CustomText';
import DefaultButton from '../DefaultButton';
import Separator from '../Separator';
import styles from './styles';

interface Props {
  message?: string;
  image?: string;
  onPressPrimary: () => void;
  primaryButtonText: string;
  onPressSecondary?: () => void;
  secondaryButtonText?: string;
  visible: boolean;
}

const CustomModal = ({
  message,
  image,
  onPressPrimary,
  primaryButtonText,
  onPressSecondary,
  secondaryButtonText,
  visible,
}: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.mainContainer}>
        <View style={styles.innerAlert}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
          ) : (
            <CustomText size={18} variant="italic">
              {message}
            </CustomText>
          )}
          <Separator size={10} />
          <DefaultButton onPress={onPressPrimary} text={primaryButtonText} additionalStyle={styles.button} />
          {secondaryButtonText && onPressSecondary ? (
            <>
              <Separator size={10} />
              <DefaultButton
                onPress={onPressSecondary}
                text={secondaryButtonText}
                additionalStyle={styles.button}
                variant="secondary"
              />
            </>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

CustomModal.defaultProps = {
  onPressSecondary: null,
  secondaryButtonText: '',
};

export default CustomModal;
