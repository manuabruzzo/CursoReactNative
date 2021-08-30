import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';

import { CustomModal, DefaultButton, Separator, CustomText, Header } from '../../components';
import styles from './styles';

import { colors } from '../../utils/theme';

const arr = Array.from({ length: 6 }, (_, index) => index);
// arr = [0, 1, 2, 3, 4, 5]

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('Inside useEffect');
  }, []);

  console.log('Inside Experimental');

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <Header title="Experimental" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <CustomText color={colors.white} size={72} space={1} variant="bold">
            React
          </CustomText>
          <CustomText color={colors.black} size={24} space={12} variant="bold">
            Native
          </CustomText>
          <Separator />
          {arr.map((item) => (
            <View key={`image-${item}`}>
              <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.image}
                resizeMode="contain"
              />
              <Separator />
            </View>
          ))}

          <DefaultButton text="Button text" textSize={24} onPress={showModal} variant="secondary" />
          <CustomModal
            message="Mensaje de alerta"
            visible={isModalVisible}
            onPressPrimary={hideModal}
            primaryButtonText="Aceptar"
            onPressSecondary={hideModal}
            secondaryButtonText="Cancelar"
          />
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default ExperimentalScreen;
