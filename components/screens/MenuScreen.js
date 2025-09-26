import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import FoodItems from '../screens/FoodItems'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux'

const MenuScreen = () => {
  const cart= useSelector((state)=>state.cart.cart)
  console.info('Cart Items: ',cart)
  const route= useRoute()
  const navigation= useNavigation();
  const [liked, setLiked] = useState(false);
  const [menu,setMenu] = useState([]);
  const [modalVisible,setModalVisible]= useState(false)

  useEffect(()=>{
    const fetchMenu=()=>{
      setMenu(route.params.menu)
    }
    fetchMenu();
  },[])

  const toggleModal= ()=>{
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <Ionicons name='arrow-back' size={24}/>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
              <Ionicons name='search-outline' size={24}/>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.hotelName}>{route.params.name}</Text>
              <View style={styles.iconRow}>
                <Ionicons name='share-social-outline' size={24}/>
                <TouchableOpacity onPress={() => setLiked(!liked)}>
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"} 
                    size={24}
                    color={liked ? "green" : "black"} 
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ratingRow}>
              <Octicons name='feed-star' size={15} color='green'/>
              <Text>{route.params.rating},</Text>
              <Text>{route.params.time}</Text>
            </View>
            <Text style={styles.cuisineText}>{route.params.cuisines}</Text>
            <View style={styles.outletRow}>
              <Text style={styles.outletTitle}>Outlet</Text>
              <Text style={styles.outletAddress}>{route.params.address}</Text>
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>{route.params.time}mins</Text>
              <Text style={styles.homeText}>Home</Text>
            </View>
            <Text style={styles.line}/>
            <View style={styles.deliveryRow}>
              <Ionicons name='bicycle-sharp' size={24} color='orange'/>
              <Text style={styles.deliveryText}>0-3 Kms |</Text>
              <Text style={styles.deliveryText}>35 Delivery Free with apply</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
        <Text style={styles.line}/>
        <View style={styles.menuContainer}> 
          {route.params.menu.map((item,index)=>(
            <FoodItems item={item} key={index}/>
          ))}
        </View>
      </ScrollView>

      <Pressable onPress={toggleModal} style={styles.menuButton}>
        <MaterialIcons name='menu-book' size={24} color='white' style={styles.menuIcon}/>
        <Text style={styles.menuButtonText}>MENU</Text>
      </Pressable>

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          {menu.map((item,i)=>(
            <View style={styles.modalRow} key={i}>
              <Text style={styles.modalText}>{item.name}</Text>
              <Text style={styles.modalText}>{item.items.length}</Text>
            </View>
          ))}
          <View style={styles.modalImageContainer}>
            <Image
              style={styles.modalImage}
              source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv65sTP0xkFO4xbOFT5lhkddzpOMExEbCyQ&s'
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#B0C4DE',
    height:300,
    borderBottomLeftRadius:moderateScale(20),
    borderBottomRightRadius:moderateScale(20),
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    top:moderateScale(10),
    marginHorizontal:moderateScale(5)
  },
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:moderateScale(3)
  },
  searchText:{
    fontWeight:'700'
  },
  card:{
    backgroundColor:'#ffffff',
    height:200,
    marginTop:30,
    marginHorizontal:moderateScale(15),
    borderRadius:moderateScale(20)
  },
  cardHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  hotelName:{
    left:moderateScale(10),
    fontWeight:'bold',
    fontSize:moderateScale(20),
    top:moderateScale(10)
  },
  iconRow:{
    flexDirection:'row',
    alignItems:'center',
    gap:moderateScale(5),
    marginHorizontal:moderateScale(10),
    marginTop:moderateScale(20)
  },
  ratingRow:{
    flexDirection:'row',
    gap:moderateScale(5),
    marginLeft:moderateScale(10),
    alignItems:'center',
    top:moderateScale(7)
  },
  cuisineText:{
    left:moderateScale(10),
    top:moderateScale(8),
    color:'grey'
  },
  outletRow:{
    flexDirection:'row',
    gap:moderateScale(25),
    top:moderateScale(15)
  },
  outletTitle:{
    left:moderateScale(10),
    fontSize:15,
    fontWeight:'700'
  },
  outletAddress:{
    color:'grey'
  },
  timeRow:{
    flexDirection:'row',
    gap:moderateScale(20),
    top:moderateScale(20)
  },
  timeText:{
    left:moderateScale(10),
    fontSize:15,
    fontWeight:'700'
  },
  homeText:{
    color:'grey'
  },
  line:{
    borderColor:'grey',
    borderWidth:.7,
    height:1,
    top:moderateScale(25)
  },
  deliveryRow:{
    gap:5,
    top:moderateScale(35),
    flexDirection:'row',
    left:moderateScale(10)
  },
  deliveryText:{
    alignItems:'center',
    top:moderateScale(3),
    color:'grey'
  },
  menuHeader:{
    alignItems:'center',
    justifyContent:'center',
    top:verticalScale(10)
  },
  menuTitle:{
    fontSize:18,
    fontWeight:'700'
  },
  menuContainer:{
    top:moderateScale(35)
  },
  menuButton:{
    width:60,
    height:60,
    borderRadius:40,
    justifyContent:'center',
    backgroundColor:'black',
    left:'auto',
    right:25,
    position:'absolute',
    bottom:35,
    alignContent:'center'
  },
  menuIcon:{
    textAlign:'center'
  },
  menuButtonText:{
    color:'white',
    textAlign:'center',
    fontWeight:'500'
  },
  modalContainer:{
    height:moderateScale(190),
    width:moderateScale(250),
    backgroundColor:'#000000',
    position:'absolute',
    right:moderateScale(10),
    bottom:moderateScale(35),
    borderRadius:moderateScale(7)
  },
  modalRow:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    padding:moderateScale(10)
  },
  modalText:{
    fontWeight:'600',
    color:'white',
    fontSize:17
  },
  modalImageContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  modalImage:{
    height:70,
    width:120,
    resizeMode:'contain'
  }
})
