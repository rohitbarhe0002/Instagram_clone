import { View, Text } from 'react-native'
import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const Post = ({post}) => {
   console.log(post.name,"===============");
  return (
    <View>
     <Header imageUri={post.user.imageUri} name={post.user.name}/>
     <Body imageUri={post.imageUri}/>
     <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}/>
    </View>
  )
}

export default Post 