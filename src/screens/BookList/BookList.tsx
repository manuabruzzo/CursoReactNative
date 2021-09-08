import React, { useEffect, useState } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { goToScreen } from '../../navigation/controls';
import { CustomText, Header, Separator } from '../../components';
import styles from './styles';
import { getAllBooks } from '../../services';
import { Book } from '../../types/Book';

const ListItem = ({ id, title }: { id: number; title: string }) => {
  return (
    <TouchableOpacity onPress={() => goToScreen('BookDetails', { id, title })} style={styles.listItemContainerShadow}>
      <View style={styles.listItemContainer}>
        <CustomText numberOfLines={2} size={16} align="center">
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatList = ({ item }: { item: Book }) => {
  return <ListItem id={item.id} title={item.title} />;
};

const BookListScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const netInfo = useNetInfo();

  console.log('isConnected', netInfo.isConnected);

  const getBookData = async () => {
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        Alert.alert('Error getting books from Book List Screen');
      }
    } catch (error) {
      console.log('Error getting books on BookListScreen', error);
      Alert.alert('Error getting books from Book List Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">You don't have internet :'(</CustomText>
      </View>
    );
  }

  console.log('Inside BookListScreen');

  return (
    <>
      <Header showBackButton={false} title="Book List" />
      <View style={styles.mainContainer}>
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={getBookData}
          data={books}
          renderItem={renderFlatList}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistConteiner}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default BookListScreen;
