import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import ProfilePicture from '../../components/ProfilePicture'
import Stories from '../../components/stories'
import Post from '../../components/Post'
import Feed from '../../components/Feed'

const HomeScreen= () => {
  console.log("heloo from home");

  return (
    <SafeAreaView>
<Feed/>
    </SafeAreaView>
  )
}

export default HomeScreen
