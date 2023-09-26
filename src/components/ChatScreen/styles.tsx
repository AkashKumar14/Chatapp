import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  messageContainer: {
    borderRadius: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    minHeight: 40,
  },

  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D0F0C0',
    borderTopRightRadius: 0,
    marginRight: 10,
    marginLeft: 60
  },

  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#D9FEE5',
    borderTopLeftRadius: 0,
    marginLeft: 10
  },

  messageText: {
    color: 'black',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: 'white',
    backgroundColor: '#F5F5F5',
    height: 50,
    marginBottom: -550,
    borderRadius: 30,
  },

  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 24,
    borderColor: '#E5E5E5',
    height: 40,
  },

  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButton: {
    backgroundColor: '#F5F5F5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4
  },

  messageTime: {
    fontSize: 10,
    color: 'gray',
    marginTop: 3
  },
});

export default styles;
