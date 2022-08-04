import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Story from '../Story'
import storiesData from '../../../assets/data/stories'
const data = [
    {
        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        name:'Aayush'
    },
    {
        imageUri:'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
        name:'Rohit'
    },
    {
        imageUri:'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
        name:'Lokesh'
    },
    {
        imageUri:'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
        name:'Devendra'
    },
    {
        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        name:'Vijay'
    },
    {
        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        name:'Vijay'
    },
]

const Stories = () => {
    console.log("heloo",data);
  return (
 <FlatList data={storiesData}
 keyExtractor = {({name})=>name }
horizontal
showsHorizontalScrollIndicator={false}
 renderItem = {({item})=> <Story story={item}/>}/>
  )
}

export default Stories;