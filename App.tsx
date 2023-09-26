import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import ChatScreen from './src/components/ChatScreen';
import ChatHeader from './src/components/ChatHeader';

const App = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <StatusBar barStyle="light-content" />
      <ChatHeader />
      <ChatScreen />
    </View>
  );
};

export default App;
