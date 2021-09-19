import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  flatlistConteiner: {
    alignSelf: 'center',
    width: DEVICE_WIDTH * 0.9,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.white,
    paddingVertical: 20,
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
