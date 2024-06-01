import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 14,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 8,
    paddingBottom: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#B8BC00',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 9,
    color: 'black',
  },
});
