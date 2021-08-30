import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, View } from 'react-native';
import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Separator } from '../../components';
import styles from './styles';
import { getAllBooks } from '../../services';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const dis = async () => {
      try {
        const { success, data } = await getAllBooks();
        if (success) {
          setBooks(data);
        } else {
          Alert.alert('Error getting books from Home Screen');
        }
      } catch (error) {
        console.log('Error getting books on HomeScreen', error);
        Alert.alert('Error getting books from Home Screen');
      }
    };
    dis();
  }, []);

  console.log('Inside HomeScreen');

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <CustomText size={20} variant="bold">
            Home Screen
          </CustomText>
          <Separator />
          <DefaultButton text="Go to experimental screen" textSize={16} onPress={goToExperimentalScreen} />
          <CustomText>{JSON.stringify(books, null, 2)}</CustomText>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
