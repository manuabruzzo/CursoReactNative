import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Separator from '../Separator';
import styles from './styles';

const Header = () => {
  return (
    <>
      <SafeAreaView edges={['top']} />
      <View style={styles.mainContainer}>
        <Image source={require('../../assets/images/banner.png')} style={styles.banner} resizeMode="stretch" />
        <Image source={require('../../assets/images/hp_logo.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <Separator size={15} />
    </>
  );
};

export default Header;
