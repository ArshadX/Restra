import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Rating} from 'react-native-ratings';
import Swiper from './Swiper';
const CustomFlatlist = ({data, onPress}) => {
  const renderItem = ({item}) => {
    return <Swiper imageUrl={item.url} />;
  };
  return (
    <Pressable style={styles.cardDesign} onPress={onPress}>
      <View style={styles.content}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
          showPagination
          paginationDefaultColor="#fff"
          paginationActiveColor="#000"
          paginationStyle={styles.dotsView}
          paginationStyleItem={styles.dots}
          data={data.images}
          renderItem={renderItem}
          horizontal={true}
          decelerationRate="normal"
          scrollEnabled
          snapToInterval={60}
          alwaysBounceHorizontal
        />
        <View style={styles.detailsView}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Rating
              ratingCount={5}
              startingValue={data.rating}
              ratingTextColor="#28b463"
              readonly={true}
              showReadOnlyText={false}
              imageSize={15}
              style={{alignItems: 'flex-start'}}
            />
            <Text style={styles.text}>{data.total_review}</Text>
          </View>
          <Text style={styles.text}>{data.address}</Text>
          <Text style={styles.text}>
            {' '}
            <Text style={styles.title}>Mobile: </Text>
            {data.mobile}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.title}>Description: </Text>
            {data.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardDesign: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    elevation: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 2,
    elevation: 4,
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  Action: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 14,
  },
  dotsView: {
    top: 180,
  },
  dots: {
    width: 6,
    height: 6,
  },

  content: {
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#696969',
    fontSize: 12,
  },
  detailsView: {
    margin: 10,
  },
});
export default CustomFlatlist;
