import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Chats from '../data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={Chats}
        renderItem={({ item }) =>
          <ChatListItem chatRoom={item} />}
        showsVerticalScrollIndicator={false} />
    </View>
  );
}


