import { Ionicons, Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CallScreen from '../screens/CallScreen';
import CameraScreen from '../screens/CameraScreen';
import ChatDetailScreen from '../screens/ChatDetailScreen';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import { tabScreenOptions } from '../screens/utils';
import { CallsParamList, CameraParamList, ChatsParamList, StatusParamList, TopTabParamList, } from '../types';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: { backgroundColor: Colors[colorScheme].tint },
        indicatorStyle: { backgroundColor: Colors[colorScheme].background, height: 4 },
        labelStyle: { fontWeight: "bold" },
        showIcon: true
      }}
    >
      <TopTab.Screen
        name="Camera"
        component={CameraNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name='camera' color={color} size={18} />,
          tabBarLabel: () => null
        }}
      />
      <TopTab.Screen
        name="Chats"
        component={ChatNavigator}
      />
      <TopTab.Screen
        name='Status'
        component={StatusNavigator}
      />
      <TopTab.Screen
        name='Calls'
        component={CallNavigator}
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CameraStack = createStackNavigator<CameraParamList>();

function CameraNavigator() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name='CameraScreen'
        component={CameraScreen}
        options={tabScreenOptions}
      />
    </CameraStack.Navigator>
  );
}

const ChatsStack = createStackNavigator<ChatsParamList>();

function ChatNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name='ChatsScreen'
        component={ChatScreen}
        options={tabScreenOptions}
      />
    </ChatsStack.Navigator>
  );
}
const StatusStack = createStackNavigator<StatusParamList>();

function StatusNavigator() {
  return (
    <StatusStack.Navigator >
      <StatusStack.Screen
        name='StatusScreen'
        component={StatusScreen}
        options={tabScreenOptions}
      />
    </StatusStack.Navigator>
  );
}

const CallStack = createStackNavigator<CallsParamList>();

function CallNavigator() {
  return (
    <CallStack.Navigator>
      <CallStack.Screen
        name='CallsScreen'
        component={CallScreen}
        options={tabScreenOptions}
      />
    </CallStack.Navigator>
  );
}
