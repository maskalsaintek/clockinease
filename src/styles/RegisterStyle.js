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
    marginTop: 30,
  },
  registerButton: {
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
    marginTop: 28,
    marginHorizontal: 30,
  },

  registerButtonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },

  loginButton: {
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
    marginBottom: 50,
    marginHorizontal: 80,
  },

  loginButtonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
