import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Header, SearchBox, Separator } from '../../components';
import styles from './styles';
import { Character } from '../../types/Character';
import useCharactersData from './hooks/useCharactersData';
import { colors } from '../../utils/theme';

const ListItem = ({ id, name }: { id: number; name: string }) => {
  return (
    <TouchableOpacity
      onPress={() => goToScreen('CharacterDetails', { id, name })}
      style={styles.listItemContainerShadow}
    >
      <View style={styles.listItemContainer}>
        <CustomText numberOfLines={2} size={16} align="center">
          {name}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

const renderFlatList = ({ item }: { item: Character }) => {
  return <ListItem id={item.id} name={item.name} />;
};

const CharacterListScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const { characters, loading, errorOcurred } = useCharactersData(refreshFlag, inputText);

  const netInfo = useNetInfo();

  console.log('isConnected', netInfo.isConnected);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">You don't have internet :'(</CustomText>
      </View>
    );
  }

  if (errorOcurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">An unknown error ocurred ☹️</CustomText>
        <Separator size={30} />
        <DefaultButton text="Retry" textSize={20} onPress={() => setRefreshFlag(!refreshFlag)} />
      </View>
    );
  }

  console.log('Inside CharacterListScreen');

  return (
    <>
      <Header showBackButton={false} title="Character List" />
      <View style={styles.mainContainer}>
        <SearchBox placeholder="Search a character..." inputText={inputText} setInputText={setInputText} />
        <Separator />
        <CustomText color={colors.red} variant="bold" size={25}>
          CHARACTERS
        </CustomText>
        <Separator />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={() => setRefreshFlag(!refreshFlag)}
          data={characters}
          renderItem={renderFlatList}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistConteiner}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default CharacterListScreen;
