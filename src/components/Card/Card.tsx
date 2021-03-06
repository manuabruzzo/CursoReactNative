import React from 'react';
import { Image, View } from 'react-native';
import { colors } from '../../utils/theme';
import { CustomText } from '..';
import styles from './styles';

interface Props {
  legend: string;
  image?: string;
}

const Card = ({ legend, image }: Props) => {
  // console.log(image);
  return (
    <View style={styles.cardContainer}>
      {image && image !== '' ? (
        <>
          <View style={styles.imageFrame}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <CustomText numberOfLines={2} size={14} align="center" color={colors.red} variant="bold">
            {legend}
          </CustomText>
        </>
      ) : (
        <>
          <View style={styles.imageFrame}>
            <Image source={require('../../assets/images/placeholder.png')} style={styles.placeholderImage} />
          </View>
          <CustomText numberOfLines={2} size={14} align="center" color={colors.red} variant="bold">
            {legend}
          </CustomText>
        </>
      )}
    </View>
  );
};

export default Card;
