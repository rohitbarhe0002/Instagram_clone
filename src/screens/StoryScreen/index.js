import { View, Text,TouchableOpacity,SafeAreaView,ImageBackground,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import storieData from '../../../assets/data/stories'
import styles  from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const StoryScreen = () => {
  const [userStories,setUserStories] = useState(null);
  const [activeStory,setActiveStory] = useState(null);
  const [activeStoryIndex,setactiveStoryindex] = useState(null);


  const route = useRoute();


  useEffect (()=> {
  
    const userId=route.params.userId
    const userStory = storieData.find (storydata => storydata.user.id === userId)
   
    setUserStories(userStory)
  setactiveStoryindex(0)
  
  },[])
  useEffect ( ()=> {
    console.log(userStories,"====+++++");
    if(userStories&& userStories.stories.length>activeStoryIndex-1){
 setActiveStory(userStories.stories[activeStoryIndex])
    }
   
  },[activeStoryIndex])
  console.log(activeStory,"66666666666");
  const handlePress = (evt) => {
    console.log(evt.nativeEvent,"iiiiiiiiiiiiiiiiiii");

  }

  if(!activeStory) {
    return (
      <SafeAreaView style={styles.container}>
      <ActivityIndicator style={{flex:1,alignItems:'center'}}/>
     </SafeAreaView>
    )
  }
  console.log(activeStory.imageUri,"-----------");
  return (
    <SafeAreaView style={styles.container}>
     <TouchableWithoutFeedback onPress={handlePress}>
     <ImageBackground source={{url:activeStory.imageUri}} style={styles.image}/>

     </TouchableWithoutFeedback>
    </SafeAreaView>
   
   
  )
}

export default StoryScreen