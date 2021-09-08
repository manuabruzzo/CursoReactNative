import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';

import { getBookById } from '../../services';
import { CustomText, Header, Separator } from '../../components';
import { colors } from '../../utils/theme';
import styles from './styles';
import { Book, Convert } from '../../types/Book';

const BookDetailsScreen = ({ route }: { route: any }) => {
  const { id, title } = route.params;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBookData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(Convert.toBook(JSON.stringify(data))[0]);
      } else {
        Alert.alert(`Error getting the details of the book ${title}`);
      }
    } catch (error) {
      console.log(`Error getting book with id ${id} in BookDetailsScreen`, error);
      Alert.alert(`Error getting the details of the book: ${title}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookData();
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
        <Separator />
        <ScrollView>
          <CustomText align="left" size={18} variant="bold">
            Title
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.title}
          </CustomText>
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Author
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.author}
          </CustomText>
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Publish date
          </CustomText>
          {book?.publishDate[0].uk && (
            <CustomText align="left" size={16}>
              United Kingdom: {book?.publishDate[0].uk}
            </CustomText>
          )}
          {book?.publishDate[1].us && (
            <CustomText align="left" size={16}>
              United States: {book?.publishDate[1].us}
            </CustomText>
          )}
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Context years
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.plotTakePlaceYears.join(', ')}
          </CustomText>
          <Separator />
        </ScrollView>
      </View>
    </>
  );
};

export default BookDetailsScreen;
