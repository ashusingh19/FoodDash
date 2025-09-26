import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { moderateScale } from 'react-native-size-matters';
import MenuComponent from './MenuComponent'
const FoodItems = ({item}) => {
  const data=[item];
  const [selected,setSelected]= useState(['Recommended']);
  const handleItemSelect=(item)=>{
    const itemSelected=selected.find((c)=>c===item);
    if(itemSelected){
      setSelected(selected.filter((sel)=>sel!==item));
    }else{
      setSelected([...selected,item]);
    }
  }
  return (
    <View>
       <>
       {data.map((item,index)=>(
        <Pressable style={styles.container} key={index} onPress={()=>handleItemSelect(item.name)}>
          <Text style={{fontSize:moderateScale(18),fontWeight:'bold'}}>{item.name} ({item.items.length})</Text>
          <Ionicons name='chevron-down'size={24}/>
        </Pressable>
       ))}

       {selected.includes(item.name)?(
            item.items.map((food,index)=>(
              <MenuComponent food={(food)} key={index}/>
            ))
      ) :null}
      </>
    </View>
  )
}

export default FoodItems

const styles = StyleSheet.create({
  container:{
    margin:moderateScale(10),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})