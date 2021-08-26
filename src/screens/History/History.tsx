import React from 'react';
import { View } from 'react-native';
import { CustomText, DefaultButton, Header, Separator } from '../../components';
import { goToScreen, resetNavigation } from '../../navigation/controls';
import styles from './styles';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <CustomText size={20}>History Screen</CustomText>
        <Separator size={15} />
        <DefaultButton text="Go to experimental screen" textSize={16} onPress={goToExperimentalScreen} />
        <Separator />
        <DefaultButton text="Log Out" onPress={resetNavigation} />
      </View>
    </>
  );
};

export default HistoryScreen;
