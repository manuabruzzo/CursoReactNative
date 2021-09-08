import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { colors } from '../../utils/theme';
import { CustomText, Header, Separator } from '../../components';
import { getCharacterById } from '../../services';
import { Character, Convert } from '../../types/Character';
import styles from './styles';

const CharacterDetailsScreen = ({ route }: { route: any }) => {
  const { id, name } = route.params;

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharacterData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getCharacterById(id);
      if (success) {
        setCharacter(Convert.toCharacter(JSON.stringify(data))[0]);
      } else {
        Alert.alert(`Error getting the details of the character ${name}`);
      }
    } catch (error) {
      console.log(`Error getting character with id ${id} in CharacterDetailsScreen`, error);
      Alert.alert(`Error getting the details of the character: ${name}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  if (loading) {
    return (
      <>
        <Header title={name} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header title={name} />
      <View style={styles.mainContainer}>
        {/* <Separator size={40} /> */}
        <Separator />
        <ScrollView>
          <CustomText align="left" size={18} variant="bold">
            Name
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.name}
          </CustomText>
          <Separator />

          <CustomText align="left" size={18} variant="bold">
            Gender
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.gender}
          </CustomText>
          <Separator />

          <CustomText align="left" size={18} variant="bold">
            Birth
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.birth}
          </CustomText>
          <Separator />

          <CustomText align="left" size={18} variant="bold">
            Death
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.death}
          </CustomText>
          <Separator />

          <CustomText align="left" size={18} variant="bold">
            Wand
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.wand}
          </CustomText>
          <Separator />

          <CustomText align="left" size={18} variant="bold">
            Patronus
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.patronus}
          </CustomText>
          <Separator />
        </ScrollView>
      </View>
    </>
  );
};

export default CharacterDetailsScreen;
