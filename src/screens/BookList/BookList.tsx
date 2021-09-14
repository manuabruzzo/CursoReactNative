import React, { useCallback, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Header, SearchBox, Separator } from '../../components';
import styles from './styles';
import { Book } from '../../types/Book';
import useBooksData from './hooks/useBooksData';
import { colors } from '../../utils/theme';

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
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const { books, loading, errorOcurred } = useBooksData(refreshFlag, inputText);

  const netInfo = useNetInfo();

  //This useCallback is unnecessary, is just a hook use example
  const toogleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">You don't have internet ☹️</CustomText>
      </View>
    );
  }

  if (errorOcurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">An unknown error ocurred ☹️</CustomText>
        <Separator size={30} />
        <DefaultButton text="Retry" textSize={20} onPress={toogleRefreshFlag} />
      </View>
    );
  }

  console.log('Inside BookListScreen');

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <SearchBox placeholder="Search a book..." inputText={inputText} setInputText={setInputText} />
        <Separator />
        <CustomText color={colors.red} variant="bold" size={25}>
          BOOKS
        </CustomText>
        <Separator />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toogleRefreshFlag}
          data={books}
          numColumns={2}
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
