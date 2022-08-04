
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

const Tab = createBottomTabNavigator();


const BottomHomeNavigator = () => {
  return (
  
  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
            return <FaIcon name={'home'} size={size} color={color} />;
             
            } 
            if (route.name === 'Discovery') {
              return <FaIcon name={'search'} size={size} color={color} />;
               
              } 
              if (route.name === 'Post') {
                return <FaIcon name={'plus-square'} size={size} color={color} />;
                 
                } 
                if (route.name === 'Nnotification') {
                  return <ADIcon name={'hearto'} size={size} color={color} />;
                   
                  } 
                  if (route.name === 'Profile') {
                    return <FaIcon name={'user-o'} size={size} color={color} />;
                     
                    } 
          },
  

        })}
        tabBarOptions = {{
          activeTintColor:'#000',
          inactiveTintColor:'grey',
          showLabel:false,
        }}
      >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Nnotification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />


      
    </Tab.Navigator>
   
  )
}

export default BottomHomeNavigator