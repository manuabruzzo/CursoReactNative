import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatlistConteiner: {
    paddingHorizontal: 20,
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    // overflow: 'visible',
    paddingHorizontal: 20,
    width: '100%',
  },
  listItemContainerShadow: {
    // backgroundColor: '#000', // invisible color
    elevation: 20,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  searchboxContainer: {
    alignContent: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: DEVICE_WIDTH * 0.9,
  },
  icon: {
    color: colors.red,
    paddingTop: 11,
    paddingLeft: 15,
  },
  textInput: {
    color: colors.red,
    height: 50,
    paddingHorizontal: 10,
    width: '85%',
  },
});

export default styles;
