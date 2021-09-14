import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { IS_ANDROID } from '../../utils/constants';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: IS_ANDROID ? 70 : 50,
    backgroundColor: colors.red,
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    height: 40,
    width: DEVICE_WIDTH,
    position: 'absolute',
  },
  banner: {
    flex: 1,
    height: 70,
    width: DEVICE_WIDTH,
  },
});

export default styles;
