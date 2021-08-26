import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, CustomText } from '../../components';
import { goToScreen, replaceRoute } from '../../navigation/controls';
import styles from './styles';

const goToMainTabs = () => {
  replaceRoute('TabNavigator');
};

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

// @ts-ignore
const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomText size={20} variant="medium">
        Welcome Screen
      </CustomText>
      <Separator size={15} />
      <DefaultButton text="Go to Tabs" textSize={16} onPress={goToMainTabs} />
      <Separator />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={goToExperimentalScreen}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
