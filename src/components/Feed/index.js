import { View,ScrollView, Text,FlatList } from 'react-native'
import React from 'react'
import Post from '../Post'
import Stories from '../stories'


const Feed = () => {
    const data = [
        {
            user : {
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              name:"Pradhumnya",
          },
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              caption:'beaytifull city ',
              likesCount:1234,
              postedAt:'9 minutes ago'
             
          },
          {
            user : {
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              name:"Ayush",
          },
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              caption:'beaytifull city',
              likesCount:1234,
              postedAt:'9 minutes ago'
             
          },
          {
            user : {
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              name:"veersa_Devendra_thakur",
          },
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              caption:'beaytifull city ',
              likesCount:1234,
              postedAt:'9 minutes ago'
             
          },
          {
            user : {
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              name:"Lokesh_7999",
          },
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              caption:'beaytifull city ',
              likesCount:1234,
              postedAt:'9 minutes ago'
             
          },
          {
            user : {
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              name:"V.j.a.y.t.h.a.k.u.r",
          },
              imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
              caption:'beaytifull city ',
              likesCount:1234,
              postedAt:'9 minutes ago'
             
          }
    ]
  return (
    <ScrollView>
      <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
     renderItem={({item})=><Post post={item}/>}
     ListHeaderComponent={Stories}

      />
    </ScrollView>
  )
}

export default Feed;