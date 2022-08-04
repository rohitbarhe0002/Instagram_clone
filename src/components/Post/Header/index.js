import { View, Text } from 'react-native'
import React from 'react'
import ProfilePicture from '../../ProfilePicture'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';



const Header = ({imageUri,name}) => {
    console.log(imageUri,name,"from header");
  return (
    <View style={styles.container}>
  
      <View style={styles.left}>
    <ProfilePicture uri={imageUri} size={40}/>
<Text style={styles.name}>{name}</Text>

</View>
<View style={styles.right}>
<Icon name="dots-three-vertical"  size={10} />
</View>
    </View>
  )
}

export default Header