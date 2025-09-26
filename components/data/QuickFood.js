import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Octicons from 'react-native-vector-icons/Octicons'
const QuickFood = () => {
    const food=[
        {
            id:'0',
            image:'https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg',
            name:'Hyderabadi Biryani',
            rating:'4.1',
            time:'20-25 min',
            offer:'10% OFF'
        },
        {
            id:'1',
            image:'https://i.pinimg.com/736x/49/e9/0a/49e90a1b6d617d2cf420a3abfbe71ea5.jpg',
            name:'North Full Thali',
            rating:'4.5',
            time:'30-40 min',
            offer:'30% OFF'
        },
        {
            id:'2',
            image:'https://saraspakistanicuisine.com/wp-content/uploads/2023/06/Shahi-Paneer-1.jpg',
            name:'Pratap Palace',
            rating:'4.7',
            time:'20-25 min',
            offer:'5% OFF'
        },
        {
            id:'3',
            image:'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
            name:'MCD Burger',
            rating:'3.9',
            time:'10-15 min',
            offer:'70% OFF'
        },
    ]
  return (
    <View style={{marginTop:moderateScale(10)}}>
      <Text style={{fontSize:16,fontWeight:'600'}}>Get It Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {food.map((item,index)=>(
            <Pressable key={index}style={{margin:10}}>
                <ImageBackground imageStyle={{borderRadius:6}} style={{aspectRatio:5/6,height:150}} source={{uri:item.image}}>
                     <Text style={{
                        color:'#ffffff',
                        fontSize:27,
                        bottom:10,
                        left:10,
                        position:'absolute',
                        fontWeight:'bold'
                     }}>{item.offer}</Text>
                </ImageBackground>
                <Text style={{
                    fontSize:16,
                    fontWeight:'700',
                    marginTop:moderateScale(7),

                }}>{item.name}</Text>
                <View style={{flexDirection:'row',gap:5,marginTop:3}}>
                    <Octicons name='feed-star' size={15}color='green'/>
                    <Text style={{marginTop:-2}}>{item.rating}</Text>
                    <Text style={{marginTop:-2}}>{item.time}</Text>
                </View>
            </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({})