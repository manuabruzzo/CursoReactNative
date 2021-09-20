import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderRadius: 10,
    borderWidth: 3,
    justifyContent: 'center',
    height: 50,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  secondary: {
    backgroundColor: 'white',
    borderColor: colors.red,
  },
  small: {
    height: 40,
    width: '30%',
  },
});

export const buttonTextColors = {
  primary: colors.yellow,
  secondary: colors.red,
};

export default styles;
