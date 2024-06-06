import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: Dimensions.get('window').width * 0.8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    flex: 1,
  },
  list: {
    marginVertical: 22,
  },
  item: {
    paddingHorizontal: 13,
    paddingVertical: 11,
    marginBottom: 12,
    borderBottomColor: 'white',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
  },
  itemText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default styles;
