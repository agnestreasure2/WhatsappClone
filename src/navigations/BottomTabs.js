import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import Home from "../screens/Home";
import Fav from "../screens/Fav";
import Orders from "../screens/Orders";
import Account from "../screens/Account";
import Explore from "../screens/Explore";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarActiveTintColor: '#009688' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/Home.png')}
              style={{ tintColor: color, width: 19, height: 20 }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/search.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/order.png')}
              style={{ tintColor: color, width: 16.67, height: 18.41 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Fav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/favourite.png')}
              style={{ tintColor: color, width: 19, height: 18 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/icons/account.png')}
              style={{ tintColor: color, width: 14.34, height: 18.41 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
