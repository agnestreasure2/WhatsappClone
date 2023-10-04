import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import OnBoarding from '../screens/OnBoarding';
import Chats from '../screens/Chats';
import BottomTabs from './BottomTabs';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
import { Settings } from 'react-native';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('BottomTabs'); // Use `navigate` to navigate to the Chats screen
    }, 10000); // Navigate to Chats screen after 10 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      {/* <Stack.Screen name="Chats" component={Chats} /> */}
      <Stack.Screen name='BottomTabs' component={BottomTabs}/>
      {/* <Stack.Screen name='Updates' component={Updates}/>
      <Stack.Screen name='Calls' component={Calls}/>
      <Stack.Screen name='Communities' component={Communities}/> */}
      {/* <Stack.Screen name='Settings' component={Settings}/> */}
    </Stack.Navigator>
  );
}

export default StackScreen;
