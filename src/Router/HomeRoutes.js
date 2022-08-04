import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FaIcon   from 'react-native-vector-icons/FontAwesome'
import ADIcon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import logo from '../../assets/data/logo.png';
import HomeScreen from '../screens/Homescreen/index'
import StoryScreen from '../screens/StoryScreen';

const Stack = createStackNavigator();


const HomeStackScreen = () => {

  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}  options={{title:'Instagram',headerShown:false, headerLeft:()=> {
      <View >
      <Feather name={'camera'} size={25} color={'#000'} style={{marginLeft:10}} />
      </View>

    },headerTitle:()=>{
      <Image source={logo}  resizeMode='contain'style={{width:150,height:50}}/>
    },
    headerRight:()=>{
      <View >
            <FontistoIcon name='paper-plane' size={20} color={'#545454'} style={{marginLeft:10}} />
      </View>
    },headerLeftContainerStyle:{
      marginRight:15,
    },
    headeRightContainerStyle:{
      marginLeft:15,
    }}}/>
  
  </Stack.Navigator>
  )
}

export default HomeStackScreen;