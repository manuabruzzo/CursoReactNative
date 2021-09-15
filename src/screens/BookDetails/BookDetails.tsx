import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';

import { CustomText, DefaultButton, Header, Separator } from '../../components';
import { colors } from '../../utils/theme';
import styles from './styles';
import useBookData from './hooks/useBookData';

const BookDetailsScreen = ({ route }: { route: any }) => {
  const { id } = route.params;
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { book, loading, errorOcurred } = useBookData(refreshFlag, id);

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
          {book?.title}
        </CustomText>
      </View>

      <ScrollView>
        <View style={styles.mainContainer}>
          <Separator />
          <View style={styles.horizontalContainer}>
            <Image source={{ uri: book?.bookCovers[0].url }} style={styles.image} resizeMode="contain" />
            <Separator isHorizontal />
            <View style={styles.infoConteinter}>
              <CustomText align="left" size={16} variant="bold">
                Author
              </CustomText>
              <CustomText align="left" size={14}>
                {book?.author}
              </CustomText>
              <Separator />
              <CustomText align="left" size={16} variant="bold">
                Publish date
              </CustomText>
              {book?.publishDate[0].uk && (
                <CustomText align="left" size={14}>
                  United Kingdom: {book?.publishDate[0].uk}
                </CustomText>
              )}
              {book?.publishDate[1].us && (
                <CustomText align="left" size={14}>
                  United States: {book?.publishDate[1].us}
                </CustomText>
              )}
              <Separator />
              <CustomText align="left" size={16} variant="bold">
                Plot take place in years:
              </CustomText>
              <CustomText align="left" size={14}>
                {book?.plotTakePlaceYears.join(', ')}
              </CustomText>
            </View>
          </View>
          <Separator size={20} />
          <View style={styles.sinopsis}>
            <CustomText align="justify" size={16} color={colors.black}>
              Sinopsis?: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis porttitor orci at
              pellentesque. Donec odio elit, placerat in nibh quis, mattis varius felis. Cras fermentum odio ut lectus
              suscipit accumsan. Nam volutpat massa sagittis nunc consectetur, sit amet placerat enim vulputate. Donec
              tempus ipsum nibh, sed aliquet mauris bibendum at.
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BookDetailsScreen;
