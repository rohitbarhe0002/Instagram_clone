import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Body = ({imageUri}) => {
  return (
    <View>
<Image source={{uri:imageUri}} style={styles.image}/>
    </View>
  )
}

export default Body;