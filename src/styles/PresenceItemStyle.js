import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    justifyContent: 'space-between',
    flex: 1,
    margin: 10,
    borderRadius: 5,
    height: (Dimensions.get('window').width - 140) / 4,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1.0,
    minWidth: (Dimensions.get('window').width - 140) / 4,
    maxWidth: (Dimensions.get('window').width - 140) / 4,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberLabel: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  statusLabel: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  hourLabel: {
    color: 'white',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
