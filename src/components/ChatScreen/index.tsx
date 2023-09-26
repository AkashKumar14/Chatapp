import React, { useState, useRef } from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Keyboard,
} from 'react-native';
import styles from './styles';

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi, Goodmorning', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
    { id: 3, text: 'Thank you so much for considering my application, I have submitted the assessment', sender: 'user' },
    { id: 4, text: 'Looking forward to having a discussion about the same. ', sender: 'user' },
  ]);

  const flatListRef = useRef<FlatList | null>(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    const newMessage = { id: messages.length + 1, text: inputMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>10:10 AM</Text>
          </View>
        )}
        onContentSizeChange={() => {
          if (flatListRef.current) {
            setTimeout(() => {
              flatListRef.current?.scrollToEnd({ animated: true });
            }, 50);
          }
        }}
        ref={flatListRef}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./data/emoji.png')} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./data/attachment.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./data/camera.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Image source={require('./data/send.png')} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
