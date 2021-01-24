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
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} resizeMode='contain' />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
      </View>
      {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
      <Text style={styles.time}>Yesterday</Text>
    </View>
  )
}

export default ChatListItem
