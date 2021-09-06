import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';

import { getBookById } from '../../services';
import { CustomText, Header, Separator } from '../../components';
import { colors } from '../../utils/theme';
import { Book } from 'types';
import styles from './styles';

const BookDetailsScreen = ({ route }: { route: any }) => {
  const { id, title } = route.params;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(data);
      } else {
        Alert.alert(`Error getting the details of the book ${title}`);
      }
    } catch (error) {
      console.log(`Error getting book with id: ${id} in BookDetailsScreen`, error);
      Alert.alert(`Error getting the details of the book: ${title}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  if (loading) {
    return (
      <>
        <Header title={title} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header title={title} />
      <View style={styles.mainContainer}>
        {/* <Separator size={40} /> */}
        <CustomText>Book Details</CustomText>
        <Separator />
        <ScrollView>
          <CustomText>{JSON.stringify(book, null, 2)}</CustomText>
        </ScrollView>
      </View>
    </>
  );
};

export default BookDetailsScreen;
