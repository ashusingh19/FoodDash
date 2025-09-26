import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Hotel from '../data/Hotel'
import MenuItems from '../data/MenuItems'
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Carousel from '../data/Carousel'
import FoodTypes from '../data/FoodTypes'
import QuickFood from '../data/QuickFood'
const HomeScreen = () => { 
  const data=Hotel;
  return (
    <SafeAreaView style={{flex:1}}>
     <ScrollView>
         <View style={styles.searchBarStyle}>
        <TextInput
          placeholder='Search Items here...'
        />
        <TouchableOpacity>
            <Ionicons name='search' size={22} color='orange'/>
        </TouchableOpacity>
      </View>
      <Carousel/>
      <FoodTypes/>
      <QuickFood/>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical:moderateVerticalScale(10)
      }}>
       <TouchableOpacity style={styles.filter}>
         <Text style={styles.filteration}>Filter</Text>
        <Ionicons name='filter' size={17} color='#e64a4aff'/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.filter}>
         <Text style={styles.filteration}>Sort by rating</Text>
        <Ionicons name='star' size={17} color='#4fe8aeff'/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.filter}>
         <Text style={styles.filteration}>Sort by price</Text>
        <FontAwesome name='rupee' size={17} color='#e38080ff'/>
       </TouchableOpacity>
      </View>

      {data.map((item,index)=>(
        <MenuItems key={index} item={item}/>
      ))}
     </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    searchBarStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:moderateScale(7),
        borderWidth:moderateScale(1),
        marginHorizontal:moderateScale(10),
        margin:verticalScale(10),
        paddingHorizontal:moderateScale(10),
        borderColor:'#C0C0C0'
    },
    filteration:{
      fontSize:16,
      margin:moderateScale(7),
      
    },
    filter:{
      flexDirection:'row',
      borderRadius:moderateScale(20),
      borderWidth:1,
      borderColor:'#C0C0C0',
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:moderateScale(5)
    },
})