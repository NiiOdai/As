import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart';

export default function App() {
  const MainNavigator = createNativeStackNavigator();
  return (
<<<<<<< HEAD
        <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName = 'Login'>
=======
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName = 'Home'>
>>>>>>> a61a53602a66d2edbbfb07e9e04a9cac582332f6
        <MainNavigator.Screen name = 'Home' component={Home}/>
        <MainNavigator.Screen name = 'Login' component={Login}/>
        <MainNavigator.Screen name = 'Cart' component={Cart}/>        
      </MainNavigator.Navigator>
    </NavigationContainer>    
   
  );
    
  }
  
