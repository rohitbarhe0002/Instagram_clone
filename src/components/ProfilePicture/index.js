import { View, Text,Image } from 'react-native'
import React from 'react';
import styles from './styles';

const ProfilePicture= ({uri,size=78}) => {
  console.log("heloo from profileffff",uri);

  return (
      <View style={[styles.container,{width:size+6,height:size+6}]}>
      <Image style={[styles.image,{width:size,height:size}]} source={{uri:uri}}/>
</View>
  )
}

export default ProfilePicture
