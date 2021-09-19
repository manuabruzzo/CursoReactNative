import { StyleSheet } from 'react-native';
// import { DEVICE_WIDTH } from '../../utils/dimensions';
// import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    marginHorizontal: 7,
    height: 240,
    width: 170,
    backgroundColor: 'white',
    elevation: 5,
  },
  imageFrame: {
    borderRadius: 30,
    overflow: 'hidden',
    height: 170,
    width: 170,
  },
  image: {
    alignContent: 'center',
    resizeMode: 'cover',
    height: 300,
    width: 200,
    transform: [{ translateY: -100 }, { translateX: -15 }],
  },
  placeholderImage: {
    alignContent: 'center',
    resizeMode: 'center',
    height: 200,
    width: 200,
    transform: [{ translateY: -17 }, { translateX: -15 }],
  },
});

export default styles;
