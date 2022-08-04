
import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet,Image, Text, View,StatusBar,SafeAreaView } from 'react-native';
import FaIcon   from 'react-native-vector-icons/FontAwesome'
import ADIcon from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen/index'
import NotificationScreen from '../screens/NotificationScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import CreatePostScreen from '../screens/CreatePostScreen/index';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackScreen from './HomeRoutes';
import BottomHomeNavigator from './BottomHomeNavigatorRoutes';
import StoryScreen from '../screens/StoryScreen';

const RouteStack = createStackNavigator();


const Router = () => {
  return (
  
  <RouteStack.Navigator>
    <RouteStack.Screen name='home ' component={BottomHomeNavigator} options={{
    headerShown:false}}/>
    <RouteStack.Screen name='story' component={StoryScreen} options={{
    headerShown:false}}/>
  </RouteStack.Navigator>
  
       
      
 
  
   
  )
}

export default Router