import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { colors } from '../../utils/theme';
import { CustomText, DefaultButton, Header, Separator } from '../../components';
import styles from './styles';
import useCharacterData from './hooks/useCharacterData';

const CharacterDetailsScreen = ({ route }: { route: any }) => {
  const { id } = route.params;
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { character, loading, errorOcurred } = useCharacterData(refreshFlag, id);

  if (loading) {
    return (
      <>
        <Header />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.red} />
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
      <Header />
      <Separator />
      <View style={styles.title}>
        <CustomText align="center" size={25} variant="bold" color={colors.red}>
          {character?.name}
        </CustomText>
      </View>
      <Separator />
      <ScrollView>
        <View style={styles.mainContainer}>
          {character?.species !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Species
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.species}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.ancestry !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Ancestry
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.ancestry}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.gender !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Gender
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.gender}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.birth !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Birth
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.birth}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.death !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Death
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.death}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.hairColor !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Hair Color
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.hairColor}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.eyeColor !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Eye Color
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.eyeColor}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.wand !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Wand
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.wand}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.patronus !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Patronus
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.patronus}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.house !== null ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Hogwarts House
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.house}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.associatedGroups.length > 0 ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Associated Groups
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.associatedGroups.join(', ')}
              </CustomText>
              <Separator />
            </>
          ) : null}
          {character?.booksFeaturedIn.length > 0 ? (
            <>
              <CustomText align="left" size={18} variant="bold" color={colors.red}>
                Book Appearances
              </CustomText>
              <CustomText align="left" size={16}>
                {character?.booksFeaturedIn.join(', ')}
              </CustomText>
              <Separator />
            </>
          ) : null}
        </View>
      </ScrollView>
    </>
  );
};

export default CharacterDetailsScreen;
