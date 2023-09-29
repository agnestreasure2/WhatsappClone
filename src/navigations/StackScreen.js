import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import OnBoarding from '../screens/OnBoarding';
import Chats from '../screens/Chats';



const Stack = createNativeStackNavigator();

const StackScreen = () => {

//   if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        {/* <Stack.Screen name="Chats" component={Chats} /> */}
       
      </Stack.Navigator>
    );
  }

  // return (
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //  <Stack.Screen name="Chats" component={Chats} />
  //   </Stack.Navigator>
  // );


export default StackScreen;
