import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { CustomText, DefaultButton, Header, Separator } from '../../components';
import { goToScreen } from '../../navigation/controls';
import { Entry } from '../../types/Entry';

import styles from './styles';
import useHistory from './hooks/useHistory';

// const goToExperimentalScreen = () => {
//   goToScreen('Experimental');
// };

// const logOut = async () => {
//   try {
//     await AsyncStorage.setItem('userLoggedInFlag', 'false');
//     resetNavigation();
//   } catch (error) {
//     console.log('Error storing log flag ', error);
//   }
// };

const flatlistKeyExtractor = (item: Entry) => `${item.type}${item.id}`;

const renderFlatList = ({ item }: { item: Entry }) => {
  return <ListItem type={item.type} id={item.id} description={item.description} />;
};

const ListItem = ({ type, id, description }: { type: string; id: number; description: string }) => {
  return (
    // <DefaultButton
    //   text={description}
    //   onPress={() => goToScreen(type === 'book' ? 'BookDetails' : 'CharacterDetails', { id, description })}
    //   variant="secondary"
    // />
    <TouchableOpacity
      onPress={() => goToScreen(type === 'book' ? 'BookDetails' : 'CharacterDetails', { id, description })}
    >
      <View style={[styles.listItemContainer, styles.listItemContainerShadow]}>
        <CustomText numberOfLines={2} size={14} align="center" variant="bold">
          {description}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const HistoryScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [clearFlag, setClearFlag] = useState<boolean>(false);
  const { history, loading, errorOcurred } = useHistory(refreshFlag, clearFlag);

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
      <View style={styles.mainContainer}>
        <DefaultButton text="Clear History" onPress={() => setClearFlag(!clearFlag)} variant="secondary" />
        <Separator />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={() => setRefreshFlag(!refreshFlag)}
          data={history}
          renderItem={renderFlatList}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistConteiner}
          style={styles.flatList}
        />
        <Separator />
        {/* <DefaultButton text="Log Out" onPress={logOut} /> */}
      </View>
    </>
  );
};

export default HistoryScreen;
