import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView, Dimensions, Image } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from '../shared';
import data from './data';


const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  // const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={item.source} 
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={"contain"}
        />
    </View>
  ), []);

  return (
    <SafeAreaView style={{ 
      flex: 1, 
      paddingTop: 30 
    }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={Dimensions.get("screen").width}
          itemWidth={Dimensions.get("screen").width - 20}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          useScrollView={true}
        />
      </View>
      <Pagination
          dotsLength={data.length}
          activeDotIndex={activeIndex}
          carouselRef={ref}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: colors.primary
          }}
          inactiveDotStyle={{
            backgroundColor: colors.gray
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
    </SafeAreaView>
  );
};

export default CustomCarousel;