import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { goToScreen } from '../../navigation/controls';
import { CustomText, DefaultButton, Header, Separator } from '../../components';
import styles from './styles';
import { Character } from '../../types/Character';
import useCharactersData from './hooks/useCharactersData';

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
  const { characters, loading, errorOcurred } = useCharactersData(refreshFlag);

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
