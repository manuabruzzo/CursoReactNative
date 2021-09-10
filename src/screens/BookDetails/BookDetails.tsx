import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { CustomText, DefaultButton, Header, Separator } from '../../components';
import { colors } from '../../utils/theme';
import styles from './styles';
import useBookData from './hooks/useBookData';

const BookDetailsScreen = ({ route }: { route: any }) => {
  const { id, title } = route.params;
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { book, loading, errorOcurred } = useBookData(refreshFlag, id);

  if (loading) {
    return (
      <>
        <Header title={title} />
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
      <Header title={title} />
      <View style={styles.mainContainer}>
        {/* <Separator size={40} /> */}
        <Separator />
        <ScrollView>
          <CustomText align="left" size={18} variant="bold">
            Title
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.title}
          </CustomText>
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Author
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.author}
          </CustomText>
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Publish date
          </CustomText>
          {book?.publishDate[0].uk && (
            <CustomText align="left" size={16}>
              United Kingdom: {book?.publishDate[0].uk}
            </CustomText>
          )}
          {book?.publishDate[1].us && (
            <CustomText align="left" size={16}>
              United States: {book?.publishDate[1].us}
            </CustomText>
          )}
          <Separator />
          <CustomText align="left" size={18} variant="bold">
            Context years
          </CustomText>
          <CustomText align="left" size={16}>
            {book?.plotTakePlaceYears.join(', ')}
          </CustomText>
          <Separator />
        </ScrollView>
      </View>
    </>
  );
};

export default BookDetailsScreen;
