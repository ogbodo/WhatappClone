import { useNavigation } from '@react-navigation/native'
import { formatDistance, subDays } from 'date-fns'
import React from 'react'
import { Text, Pressable, View, } from 'react-native'
import { ChatRoomType } from '../../types'
import AvatarNameTextContainer from '../AvatarNameTextContainer'
import styles from './styles'

type propsType = {
  chatRoom: ChatRoomType
}

const ChatListItem = (props: propsType) => {
  const { navigate } = useNavigation()
  const { chatRoom } = props
  const user = chatRoom.users[1]
  const now = new Date()
  const handleItemPress = () => {
    navigate("ChatDetailScreen", { ...user, chatRoom })
  }

  return (
    <Pressable onPress={handleItemPress} style={styles.container}>
      <AvatarNameTextContainer imageUrl={user.imageUri} name={user.name} text={chatRoom.lastMessage.content} />
      <View style={{}}>
        <Text style={styles.time}>{formatDistance(subDays(new Date(chatRoom.lastMessage.createdAt), 0), now)}</Text>
      </View>
    </Pressable>
  )
}

export default ChatListItem
