import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultButton, Header, Separator } from '../../components';
import { goToScreen, resetNavigation } from '../../navigation/controls';
import styles from './styles';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const logOut = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'false');
    resetNavigation();
  } catch (error) {
    console.log('Error storing log flag ', error);
  }
};

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <DefaultButton
          text="Go to experimental screen"
          textSize={16}
          onPress={goToExperimentalScreen}
          variant="secondary"
        />
        <Separator />
        <DefaultButton text="Log Out" onPress={logOut} variant="secondary" />
      </View>
    </>
  );
};

export default HistoryScreen;
