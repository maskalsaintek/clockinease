import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignSelf: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  logoutIcon: {transform: [{rotate: '180deg'}]},

  titleLabel: {
    marginLeft: 22,
    fontSize: 15,
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontWeight: '700',
  },

  welcomeLabel: {
    marginLeft: 20,
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'italic',
  },

  profile: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
  },

  profileInfo: {
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 10,
  },

  profileName: {
    fontSize: 15,
    fontWeight: '700',
  },

  profileEmail: {
    fontSize: 11,
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#818181',
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 36,
  },
  monthContainer: {
    height: 20,
    width: 100,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  monthLabel: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
  },
  chevronButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    backgroundColor: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  chevronIcon: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  calenderButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calenderIcon: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  presenceListContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 100,
    paddingHorizontal: 30,
  },
  qrButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
  },
});

export default styles;
