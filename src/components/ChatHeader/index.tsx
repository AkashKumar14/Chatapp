import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('./data/back.png')} />
      </TouchableOpacity>
      <Image source={require('./data/profile.jpg')} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Faraz Ahmed</Text>
        <Text style={styles.lastSeenText}>Last seen 12:40 AM</Text>
      </View>
      <TouchableOpacity style={styles.videoCallIcon}>
        <Image source={require('./data/videocall.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.voiceCallIcon}>
        <Image source={require('./data/call.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsButton}>
        <Image source={require('./data/options.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
