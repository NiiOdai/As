import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const MainNavigator =createStackNavigator();
  return (
    <View>
      <NavigationContainer>art
       <MainNavigator>
         <MainNavigator.Screen name ="Login" component={Login}/>
         <MainNavigator.Screen name ='Cart' component={Cart}/>
         <MainNavigator.Screen name ='Home' component={Login}/>
       </MainNavigator>
     </NavigationContainer>

      // <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
