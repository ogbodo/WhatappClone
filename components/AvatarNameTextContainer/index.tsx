import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
import Colors from "../../constants/Colors";

type propsType = {
  text: string
  name: string
  imageUrl: string
  handleClick?(): void
  imageStyle?: object
  nameStyle?: object
  textStyle?: object
  containerStyle?: object
}
const AvatarNameTextContainer = (props: propsType) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.handleClick ? <Pressable onPress={props.handleClick}>
        <AntDesign name='arrowleft' size={20} color={Colors.light.background} />
      </Pressable>
        : null}
      <Image source={{ uri: props.imageUrl }} style={[styles.avatar, props.imageStyle]} resizeMode='contain' />
      <View style={styles.middleContainer}>
        <Text style={[styles.userName, props.nameStyle]}>{props.name}</Text>
        <Text numberOfLines={1} style={[styles.lastMessage, props.textStyle]}>{props.text}</Text>
      </View>
    </View>
  )
}

export default AvatarNameTextContainer
