import React from 'react';
import { View } from 'react-native';
import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Separator } from '../../components';
import styles from './styles';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomText>Home Screen</CustomText>
      <Separator />
      <DefaultButton text="Go to experimental screen" textSize={16} onPress={goToExperimentalScreen} />
    </View>
  );
};

export default HomeScreen;
