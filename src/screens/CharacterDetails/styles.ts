import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    flex: 1,
    width: '90%',
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    elevation: 5,
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
