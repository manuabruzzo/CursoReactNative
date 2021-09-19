import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatlistConteiner: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 20,
    width: DEVICE_WIDTH * 0.9,
  },
  listItemContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 10,
    width: DEVICE_WIDTH * 0.4,
  },
  listItemContainerShadow: {
    elevation: 3,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
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
