

import { View, Text,TouchableOpacity } from 'react-native'
import ProfilePicture from '../ProfilePicture'
import styles from './Styles'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Story = (props) => {
  const  {
    story:{
    user:{
      id,
      imageUri,
      name,
    }
  }
  }=props;

  const navigation = useNavigation();
 const    onPress = ()=> {
  navigation.navigate("story",{userId:id})

    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
    <ProfilePicture uri={imageUri} name={name} />
    <Text style={styles.name}>{name}</Text>
    </View>
   
    </TouchableOpacity>
  )
}

export default Story;