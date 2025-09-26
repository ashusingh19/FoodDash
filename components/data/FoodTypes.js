import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const FoodTypes = () => {
    const types=[
        {
            id:'0',
            image:'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2025/05/Veg-Kofta-Biryani-H1.jpg?fit=600%2C900&ssl=1',
            name:'Biryani'
        },
        {
            id:'1',
            image:'https://prettysweetblog.com/wp-content/uploads/2021/01/No-bake-chocolate-hazelnut-dessert-in-a-glass-1-2.jpg',
            name:'Dessert'
        },
        {
            id:'2',
            image:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1600&h=900',
            name:'Burger'
        },
        {
            id:'3',
            image:'https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/corn-sandwich-recipe-1.jpg',
            name:'Sandwich'
        },
        {
            id:'4',
            image:'https://cdn.loveandlemons.com/wp-content/uploads/2024/07/avocado-salad.jpg',
            name:'Salad'
        },
        {
            id:'5',
            image:'https://static.vecteezy.com/system/resources/previews/066/482/231/non_2x/close-up-of-panner-tikka-masala-in-a-clay-bowl-a-delicious-indian-dish-featuring-grilled-paneer-cheese-in-a-creamy-tomato-based-sauce-free-photo.jpg',
            name:'Panner'
        },
        {
            id:'6',
            image:'https://www.funfoodfrolic.com/wp-content/uploads/2022/06/Thali-8.jpg',
            name:'Thali'
        },
    ]
  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {types.map((item,index)=>(
        <View key={index} style={{margin:moderateScale(5)}}>
            <Image
              source={{uri:item.image}}
              style={styles.images}
            />
            <Text style={{textAlign:'center',fontSize:moderateScale(13)}}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:verticalScale(10),
    },
    images:{
        width:scale(55),
        height:scale(55),
        borderRadius:moderateScale(30),
        flexDirection:'row',
        marginHorizontal:moderateScale(7),
        marginBottom:verticalScale(5),
        borderWidth:moderateScale(1),
        borderColor:'#C0C0C0',
    }
})