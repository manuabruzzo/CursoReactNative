import React, { useEffect, useState } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { goToScreen } from '../../navigation/controls';
import { CustomText, Header, Separator } from '../../components';
import styles from './styles';
import { getAllCharacters } from '../../services';
import { Character } from '../../types/Character';

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
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const netInfo = useNetInfo();

  console.log('isConnected', netInfo.isConnected);

  const getCharacterData = async () => {
    try {
      const { success, data } = await getAllCharacters();
      if (success) {
        setCharacters(data);
      } else {
        Alert.alert('Error getting characters from Character List Screen');
      }
    } catch (error) {
      console.log('Error getting characters on CharacterListScreen', error);
      Alert.alert('Error getting characters from Character List Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">You don't have internet :'(</CustomText>
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
          onRefresh={getCharacterData}
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
