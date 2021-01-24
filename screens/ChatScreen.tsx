import * as React from 'react';
import { FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import { View } from '../components/Themed';
import Chats from '../data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 30 }}
        data={Chats}
        renderItem={({ item }) =>
          <ChatListItem chatRoom={item} />}
        showsVerticalScrollIndicator={false} />
    </View>
  );
}


