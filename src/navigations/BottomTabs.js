import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Settings, View } from "react-native";

import Chats from "../screens/Chats";
import Updates from "../screens/Updates";
import Calls from "../screens/Calls";
import Communities from "../screens/Communities";
import Next from "../screens/Next";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarActiveTintColor: '#0096FF' }}
    >
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/updates.png')}
              style={{ tintColor: color, width: 19, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/calls.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/community.png')}
              style={{ tintColor: color, width: 22, height: 18.41 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/chats.png')}
              style={{ tintColor: color, width: 22, height: 18 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Next}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/settings.png')}
              style={{ tintColor: color, width: 14.34, height: 18.41 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
