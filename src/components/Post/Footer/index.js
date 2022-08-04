import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FaIcon   from 'react-native-vector-icons/FontAwesome'
import { TouchableWithoutFeedback } from 'react-native-web'





const Footer= ({likesCount,caption,postedAt}) => {
  const [liked,setLiked] = useState(false);
  const [likedCount,setLikedCount] = useState(0);



 const handleLike= ()=> {
   const amount= liked?-1:1
   setLikedCount(likedCount+amount);
   setLiked(!liked)
 }
 useEffect(()=>{
   console.log(likesCount,"lllllllllll");
  setLikedCount(likesCount)
},[])
  return (
    <View style={styles.container}>
        <View  style={styles.iconsConatiner}>
          <View style={styles.leftIcons}>
        <TouchableWithoutFeedback onPress={handleLike}>
        <ADIcon name={liked?'heart':'hearto'} size={22}  color={ liked? "#c30000":'#545454'}/>
        </TouchableWithoutFeedback>
        <FontistoIcon name='comment' size={22} color='#545454'/>
        <FontistoIcon name='paper-plane' size={20} color='#545454' />
        </View>
        <FaIcon name="bookmark-o" size={25}/>
      </View>
      <Text style={styles.likesCount}>{likedCount} Likes
      </Text>
      <Text style={styles.caption}>{caption}
      </Text>
      <Text style={styles.postedAt}>{postedAt}
      </Text>
    </View>
  )
}

export default Footer
