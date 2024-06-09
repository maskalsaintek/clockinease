import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#D4CB00',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 24,
    marginHorizontal: 30,
  },

  LoginButtonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },

  RegisterButton: {
    backgroundColor: '#3ADE00',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 14,
    marginHorizontal: 80,
  },

  RegisterButtonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
