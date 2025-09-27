import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { useSelector,useDispatch } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { addToCart, cleanCart, decreaseQuantity, incrementQuantity, removeFromCart } from '../../redux/cartSlice'
const CartScreen = () => {
  const route=useRoute()
  const dispatch= useDispatch();
  const navigation=useNavigation()
  const cart= useSelector((state)=>state.cart.cart)
  const total=cart.map((item)=>item.price*item.quantity).reduce((curr,prev)=>curr+prev,0)
   const [addItems, setAddItems] = useState(0)
   const instructions =[
    {
      id:'0',
      name:'Avoid Ringing',
      iconName:'bell'
    },
    {
      id:'1',
      name:'Leave st the door',
      iconName:'door-open'
    },
    {
      id:'2',
      name:'Direction to reach',
      iconName:'directions'
    },
    {
      id:'3',
      name:'Avoid Calling',
      iconName:'phone-alt'
    }
   ]
  return (
    <>
      <ScrollView>
        {total >0 ?(
          <>
             <View style={{
          flexDirection:'row',
          padding:moderateScale(10),
          alignItems:'center'
        }}>
          <Ionicons onPress={()=>navigation.goBack()} name='arrow-back' size={24}/>
            <Text style={{fontWeight:'600',fontSize:17,left:moderateScale(3)}}>{route.params.name}</Text>
        </View>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          backgroundColor:'#ffffff',
          marginHorizontal:moderateScale(10),
          padding:moderateScale(10),
          borderRadius:moderateScale(20),
          top:moderateScale(10)
        }}>
          <Text style={{fontWeight:'500',fontSize:16,left:moderateScale(5)}}>Odering for Someone else?</Text>
          <Text style={{color:'red',fontWeight:'700',fontSize:16,right:moderateScale(5)}}>Add Details</Text>
         </View>
        <View style={{
              marginTop:moderateScale(25),
              marginHorizontal:moderateScale(15),
              backgroundColor:'#ffffff',
              borderRadius:moderateScale(12),
              padding:moderateScale(14),
              marginLeft:moderateScale(10),
              marginRight:moderateScale(10)
            }}>
          {cart.map((item,index)=>(
            <View key={index} style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              marginVertical:verticalScale(5)
            }} >
              <Text style={{width:moderateScale(100),fontSize:16,fontWeight:'600'}}>{item.name}</Text>
              <Pressable style={{
                flexDirection:'row',
                paddingHorizontal:moderateScale(10),
                paddingVertical:verticalScale(5),
                alignItems:'center',
                borderColor:'#BEBEBE',
                borderWidth:0.5,
                borderRadius:moderateScale(10),
                top:moderateScale(5),
              }}>
                <Pressable onPress={()=>{
                  dispatch(decreaseQuantity(item))
                }}>
                  <Text style={{fontSize:20,color:'green',paddingHorizontal:moderateScale(6),fontWeight:'600'}}>-</Text>
                </Pressable>
                <Pressable>
                  <Text style={{fontSize:20,color:'green',paddingHorizontal:moderateScale(6),fontWeight:'600'}}>{item.quantity}</Text>
                </Pressable>
                <Pressable onPress={()=>{
                  setAddItems(prev => prev + 1)
                  dispatch(incrementQuantity(item))
                }}>
                  <Text style={{fontSize:20,color:'green',paddingHorizontal:moderateScale(6),fontWeight:'600'}}>+</Text>
                </Pressable>
              </Pressable>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                ₹{item.price*item.quantity}
              </Text>
            </View>
          ))}
        </View>
          <View style={{padding:moderateScale(15)}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>Delivery instructions</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:verticalScale(-10)}}>
             {instructions.map((item,i)=>(
              <Pressable style={{
                margin:moderateScale(10),
                padding:moderateScale(5),
                borderRadius:moderateScale(10),
                backgroundColor:'#FFFFFF'
              }}>
                <View>
                  <FontAwesome5 name={item.iconName}size={22} color='grey'/>
                  <Text style={{
                    color:'#383838',
                    fontSize:13,
                    padding:moderateScale(10),
                    width:moderateScale(75)

                  }}>{item.name}</Text>
                </View>
              </Pressable>
             ))}
          </ScrollView>

          <View style={{marginHorizontal:moderateScale(10)}}>
            <Text style={{
              color:'black',
              fontSize:18,
              fontWeight:'bold',
              left:moderateScale(15),
              
            }}>Billing Details</Text>
           <View style={{backgroundColor:'white',borderRadius:moderateScale(13),padding:moderateScale(20),}}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:17,color:'grey',top:-10}}>Item total</Text>
              <Text style={{fontSize:17,top:-10}}>₹{total}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:17,color:'grey',fontWeight:'400',top:-10}}>Delivery Fee | 1.2Kms</Text>
              <Text style={{fontSize:17,color:'red',fontWeight:'500',top:-10}}>Free</Text>
            </View>
            <Text style={{fontSize:17,color:'grey',fontWeight:'400',top:-10}}>Free Deliveryon your order!</Text>
            <Text style={{borderWidth:1,borderColor:'grey',height:0.5,}}/>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',top:moderateScale(15)}}>
              <Text style={{fontSize:17,color:'grey',fontWeight:'400',top:-10}}>Delivery Tip</Text>
              <Text style={{fontSize:17,color:'red',fontWeight:'500',top:-10}}>Add Tip</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',top:moderateScale(15)}}>
              <Text style={{fontSize:17,color:'grey',fontWeight:'400',top:-10}}>Taxes and Charges</Text>
              <Text style={{fontSize:17,fontWeight:'500',top:-10}}>₹60</Text>
            </View>
             <Text style={{borderWidth:1,borderColor:'grey',height:0.5,top:moderateScale(8)}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',top:moderateScale(22)}}>
              <Text style={{fontSize:17,color:'black',fontWeight:'bold',top:-10}}>To Pay</Text>
              <Text style={{fontSize:17,fontWeight:'bold',top:-10}}>₹{total+95}</Text>
            </View>
           </View>
          </View>
          </>
        ):(
          <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingVertical:verticalScale(330)}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',}}>Your Cart is Empty👀</Text>
          </View>
        )}
        
      </ScrollView>

      {total===0 ? (null):(
        <Pressable style={{
          backgroundColor:'white',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          padding:moderateScale(20),
          marginBottom:moderateScale(5),
          
        }}>
          <View>
            <Text style={{fontSize:18,fontWeight:'600'}}>₹{total + 95}</Text>
            <Text style={{fontSize:14,fontWeight:'400',color:'#00AB77'}}>View Detailed Bill</Text>
          </View>
          <Pressable
           onPress={()=>{navigation.navigate('LoadingScreen');
            dispatch(cleanCart());
           }}
          style={{
            backgroundColor:'#088962ff',
            padding:moderateScale(14),
            width:moderateScale(200),
            borderRadius:moderateScale(6)
          }}>
            <Text style={{
              color:'white',
              fontSize:17,
              fontWeight:'bold',
              textAlign:'center',
              
            }}>Processed to pay</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  ) 
}

export default CartScreen

const styles = StyleSheet.create({
  
})