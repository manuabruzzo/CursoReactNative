import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    flex: 1,
    width: '90%',
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 30,
    paddingHorizontal: 20,
    width: '90%',
    height: 110,
  },
  infoConteinter: {
    justifyContent: 'center',
  },
  image: {
    minWidth: 180,
    height: 300,
    borderRadius: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  sinopsis: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    padding: 15,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
