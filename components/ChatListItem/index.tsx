import { formatDistance, subDays } from 'date-fns'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ChatRoomType } from '../../types'
import styles from './styles'

type propsType = {
  chatRoom: ChatRoomType
}

const ChatListItem = (props: propsType) => {
  const { chatRoom } = props
  const user = chatRoom.users[1]
  const now = new Date()
  console.log(now);

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.avatar} resizeMode='contain' />
      <View style={styles.middleContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
      </View>
      <Text style={styles.time}>{formatDistance(subDays(new Date(chatRoom.lastMessage.createdAt), now.getMonth()), now)}</Text>
    </View>
  )
}

export default ChatListItem
