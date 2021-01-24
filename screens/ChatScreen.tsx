import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Chats from '../data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ChatListItem chatRoom={Chats[0]} />
    </View>
  );
}


