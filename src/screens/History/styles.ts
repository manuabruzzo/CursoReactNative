import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  flatList: {
    flex: 1,
    width: '90%',
    minHeight: 100,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 10,
  },
  flatlistConteiner: {
    alignContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'green',
    width: '100%',
    padding: 10,
  },
  listItemContainer: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '90%',
  },
  listItemContainerShadow: {
    elevation: 2,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
