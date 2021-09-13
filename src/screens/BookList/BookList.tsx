import React, { useCallback, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Header, Separator } from '../../components';
import styles from './styles';
import { Book } from '../../types/Book';
import useBooksData from './hooks/useBooksData';

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
      <Header showBackButton={false} title="Book List" />
      <View style={styles.mainContainer}>
        <View style={styles.searchboxContainer}>
          <MaterialIcon name="search" size={30} style={styles.icon} allowFontScaling={false} selectable={false} />
          <TextInput
            allowFontScaling={false}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search book"
            value={inputText}
            // onChangeText={(text) => setInputText(text)}
            onChangeText={setInputText}
            style={styles.textInput}
          />
        </View>
        <Separator />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toogleRefreshFlag}
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
