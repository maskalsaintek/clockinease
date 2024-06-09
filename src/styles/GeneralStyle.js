import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  screenBackgroundImage: {
    left: 0,
    top: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
