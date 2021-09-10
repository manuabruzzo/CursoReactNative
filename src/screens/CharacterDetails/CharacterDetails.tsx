import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { colors } from '../../utils/theme';
import { CustomText, DefaultButton, Header, Separator } from '../../components';
import styles from './styles';
import useCharacterData from './hooks/useCharacterData';

const CharacterDetailsScreen = ({ route }: { route: any }) => {
  const { id, name } = route.params;
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { character, loading, errorOcurred } = useCharacterData(refreshFlag, id);

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

  if (errorOcurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <CustomText variant="bold">An unknown error ocurred ☹️</CustomText>
        <Separator size={30} />
        <DefaultButton text="Retry" textSize={20} onPress={() => setRefreshFlag(!refreshFlag)} />
      </View>
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
            Species
          </CustomText>
          <CustomText align="left" size={16}>
            {character?.species}
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
