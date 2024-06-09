import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: 14,
    fontWeight: '500',
    color: 'black',
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
    viewContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    inputIOS: {
      color: 'black',
      marginHorizontal: 9,
      fontSize: 14,
      justifyContent: 'center',
    },
    placeholder: {
      color: 'black',
      justifyContent: 'center',
    },
    inputAndroid: {
      color: 'black',
      marginHorizontal: 9,
      fontSize: 14,
      justifyContent: 'center',
      paddingVertical: 0,
    },
    chevronDown: {
      display: 'none',
    },
  },
});
