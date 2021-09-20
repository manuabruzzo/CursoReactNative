import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
// import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    marginHorizontal: 7,
    height: 220,
    width: DEVICE_WIDTH * 0.4,
    backgroundColor: 'white',
    elevation: 5,
    marginVertical: 5,
  },
  imageFrame: {
    borderRadius: 30,
    overflow: 'hidden',
    height: '70%',
    width: '100%',
    marginBottom: 10,
  },
  image: {
    resizeMode: 'cover',
    height: '200%',
    width: '100%',
    transform: [{ translateY: -110 }],
  },
  placeholderImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});

export default styles;
