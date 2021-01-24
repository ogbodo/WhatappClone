import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet } from 'react-native';

import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors'
import { Octicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import ChatDetailScreen from '../screens/ChatDetailScreen';
import AvatarNameTextContainer from '../components/AvatarNameTextContainer';
import { ChatRoomType } from '../types'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
        height: 100
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: { fontWeight: "bold" }
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{
        title: "WhatsApp", headerRight: () => (
          <View style={styles.iconContainer}>
            <Octicons name='search' size={22} color={Colors.light.background} />
            <MaterialCommunityIcons name='dots-vertical' size={22} color={Colors.light.background} />
          </View>
        )
      }} />
      <Stack.Screen
        name='ChatDetailScreen'
        component={ChatDetailScreen}
        options={({ route, navigation }) => {
          //@ts-ignore
          const { name: currentUserName, imageUri } = route.params
          //@ts-ignore
          const chatRoom: ChatRoomType = route.params.chatRoom
          return {
            title: '',
            headerRight: () => (
              <View style={[styles.iconContainer, { width: 100, }]}>
                <FontAwesome5 name='video' size={22} color={Colors.light.background} />
                <MaterialCommunityIcons name='phone' size={22} color={Colors.light.background} />
                <MaterialCommunityIcons name='dots-vertical' size={22} color={Colors.light.background} />

              </View>
            ),
            headerLeft: () => (
              <View style={{ flex: 1 }}>
                <AvatarNameTextContainer imageStyle={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }} name={currentUserName} imageUrl={imageUri}
                  text={chatRoom.users.reduce((preValue, value, index, users) => appendUserName(preValue, value.name, index, users.length, chatRoom.users[0].name), '')}
                  handleClick={() => navigation.goBack()}
                  nameStyle={{
                    color: Colors.light.background,
                  }}
                  textStyle={{
                    color: Colors.light.background,
                    fontSize: 12,
                  }}
                  containerStyle={{
                    width: 130
                  }}
                />
              </View>
            ),
            headerRightContainerStyle: {
            },

          }
        }}
      />
    </Stack.Navigator>
  );
}

const appendUserName = (preValue: string, name: string, index: number, totalLength: number, currentUserName: string) =>
  name === currentUserName ? '' : preValue + name + ((index === totalLength - 1) ? ', You' : ', ')


const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    marginRight: 10
  }
})