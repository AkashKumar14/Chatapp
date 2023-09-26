import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  backButton: {
    height: 15,
    width: 20,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 11,
  },
  textContainer: {
    flex: 1,
    height: 50,
    marginTop: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
  },
  lastSeenText: {
    fontSize: 10,
    color: 'grey',
  },
  videoCallIcon: {
    width: 35,
    marginRight: 20,
  },
  voiceCallIcon: {
    width: 20,
  },
  optionsButton: {
    width: 20,
    marginLeft: 20,
  },
});

export default styles;
