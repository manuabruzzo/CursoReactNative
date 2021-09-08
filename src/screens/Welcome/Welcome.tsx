import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultButton, Separator, CustomText } from '../../components';
import { replaceRoute } from '../../navigation/controls';
import styles from './styles';

const goToMainTabs = async () => {
  try {
    await AsyncStorage.setItem('usarLoggedInFlag', 'true');
    replaceRoute('TabNavigator');
  } catch (error) {
    console.log('Error storing userLoggedFlag', 'true');
  }
};

const checkIfUserIsLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('userLoggedInFlag');
    if (value !== null && value === 'true') {
      goToMainTabs();
    }
  } catch (error) {
    console.log('Error reading userLoggedInFlag value', error);
  }
};

// @ts-ignore
const WelcomeScreen = () => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <CustomText size={20} variant="medium">
        Welcome Screen
      </CustomText>
      <Separator size={15} />
      <DefaultButton text="Go to Tabs" textSize={16} onPress={goToMainTabs} />
    </View>
  );
};

export default WelcomeScreen;
