import { StyleSheet, Text, View, Pressable, ImageBackground,  } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const MenuItems = ({item}) => {
    // console.log(item)
    const navigation= useNavigation();
  return (
    <View style={{margin:moderateScale(10)}}>
      <Pressable onPress={()=>{navigation.navigate('MenuScreen',{
        id:item.id,
        name:item.name,
        image:item.image,
        rating:item.rating,
        time:item.time,
        address:item.address,
        cost_for_two:item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu
        })}} style={{flexDirection:'row',gap:5,}}>
        <View >
            <ImageBackground 
            imageStyle={{borderRadius:moderateScale(8)}}
             source={{uri:item.image}}
             style={{aspectRatio:4/5,height:150}}
             resizeMode='cover'
             >
              <Ionicons
               name='heart-outline'
               size={25}
               color='white'
               style={{position:'absolute',top:moderateScale(10),right:moderateScale(10)}}
              />
            </ImageBackground>
        </View>
        <View style={{left:moderateScale(10)}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
            <View style={{flexDirection:'row',marginTop:verticalScale(5),gap:5}}>
                <Octicons name='feed-star' size={15}color='green'/>
                <Text style={{marginTop:-2}}>{item.rating},</Text>
                <Text style={{marginTop:-2}}>{item.time}</Text>
          </View>
          <Text style={{fontSize:14,color:'grey',marginTop:verticalScale(3)}}>{item.address}</Text>
          <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
            <View style={styles.circularTextView}>
                <Text style={styles.text}>₹</Text>
            </View>
            <Text style={{marginTop:verticalScale(5)}}>{item.cost_for_two} for two</Text>
          </View>
          <View style={{flexDirection:'row',gap:5,marginTop:verticalScale(5)}}>
            <Ionicons name='bicycle'size={22}/>
            <Text style={{marginTop:moderateScale(3)}}>Free Delivery</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MenuItems

const styles = StyleSheet.create({
    circularTextView: {
    width: moderateScale(17),
    height: moderateScale(17),
    borderRadius: moderateScale(15), 
    backgroundColor: '#d54c4cff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:verticalScale(5)
  },
  text: {
    fontSize: moderateScale(13),
    color: '#ffffff',
  },
})