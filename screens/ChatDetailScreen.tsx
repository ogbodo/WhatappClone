import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ParamsType } from './utils'


const ChatDetailScreen = () => {
  const { params } = useRoute<ParamsType>()
  return (
    <View style={{ flex: 1 }}>
    </View>
  )
}

export default ChatDetailScreen
