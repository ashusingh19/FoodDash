import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { id: '1', image: require('../assets/images/carousel1.jpg') },
    { id: '2', image: require('../assets/images/carousel2.jpg') },
    { id: '3', image: require('../assets/images/carousel3.jpg') },
    { id: '4', image: require('../assets/images/carousel4.jpg') },
    { id: '5', image: require('../assets/images/carousel5.jpg') },
  ];

  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.image} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: moderateScale(10) }} />}
        contentContainerStyle={{
          paddingHorizontal: moderateScale(10),
        }}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / (moderateScale(330) + moderateScale(10))
          );
          setActiveIndex(index);
        }}
        decelerationRate="fast"
        snapToInterval={moderateScale(330) + moderateScale(10)} // ✅ Snap correctly with spacing
        snapToAlignment="center"
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: moderateScale(330),
    height: moderateScale(200),
    borderRadius: moderateScale(7),
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(10),
  },
  dot: {
    height: moderateScale(8),
    width: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: '#fff',
    margin: moderateScale(5),
  },
});
