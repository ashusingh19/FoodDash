import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, incrementQuantity, removeFromCart } from '../../redux/cartSlice'

const MenuComponent = ({ food }) => {
 const dispatch = useDispatch();
     const cartItem = useSelector(state =>
     state.cart.cart.find(item => item.id === food.id)
    );

  const quantity = cartItem?.quantity ?? 0;
  const [addItems, setAddItems] = useState(0)
  const [selected, setSelected] = useState(false)

  return (
    <View>
      <Pressable style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>₹{food.price}</Text>
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((_, i) => (
              <FontAwesome
                key={i}
                style={{ paddingHorizontal: 2 }}
                name={i < Math.floor(food.rating) ? 'star' : 'star-o'}
                size={15}
                color='#FFD700'
              />
            ))}
          </View>
          <Text style={styles.description}>
            {food.description.length > 30
              ? food.description.substr(0, 35) + '...'
              : food.description}
          </Text>
        </View>
        <Pressable style={{ marginLeft: 10 }}>
          <Image
            style={styles.foodImage}
            resizeMode='cover'
            source={{ uri: food.image }}
          />
          {!selected ? (
            <Pressable
              onPress={() => {
                setSelected(true)
                setAddItems(1)
                dispatch(addToCart(food))
              }}
              style={styles.addButton}
            >
              <Text style={styles.addText}>Add</Text>
            </Pressable>
          ) : (
            <View style={styles.counterContainer}>
              <Pressable
                onPress={() => {
               setAddItems(prev => {
                if (prev === 1) {
               setSelected(false)
                dispatch(removeFromCart(food))  
              return 0
            }
              dispatch(decreaseQuantity(food))  
            return prev - 1
           })
          }}
     >
             <Text style={styles.counterText}>-</Text>
            </Pressable>
              <Text style={styles.counterText}>{addItems}</Text>
              <Pressable
                onPress={() => {
                  setAddItems(prev => prev + 1)
                  dispatch(incrementQuantity(food))
                }}
              >
                <Text style={styles.counterText}>+</Text>
              </Pressable>
            </View>
          )}
        </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuComponent

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  foodName: {
    fontSize: 17,
    fontWeight: '600'
  },
  foodPrice: {
    fontSize: 15,
    color: 'black',
    marginTop: 2
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(5)
  },
  description: {
    width: 180,
    marginTop: 8,
    color: 'grey',
    fontSize: 14
  },
  foodImage: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderRadius: moderateScale(8)
  },
  addButton: {
    position: 'absolute',
    bottom: verticalScale(5),
    left: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(6),
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2
  },
  addText: {
    color: 'green',
    fontSize: 15,
    fontWeight: '600'
  },
  counterContainer: {
    position: 'absolute',
    bottom: verticalScale(5),
    left: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    elevation: 2
  },
  counterText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '600',
    paddingHorizontal: moderateScale(8)
  }
})
