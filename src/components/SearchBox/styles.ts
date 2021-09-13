import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
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
