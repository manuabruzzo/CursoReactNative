import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  small: {
    height: 40,
    width: '30%',
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.primary,
};

export default styles;
