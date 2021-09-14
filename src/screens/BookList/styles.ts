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
    width: DEVICE_WIDTH * 0.45,
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
});

export default styles;
