// import { View, Image, Animated, Dimensions, ViewBase, FlatList, Text } from 'react-native'
// import React, { useRef } from 'react';
// import data from './data';
// import SlideItem from './SlideItem';

// const { width, height } = Dimensions.get("screen");


// const Indicator = ({ scrollX }) => {
  
//   return (
//     <View style={{ 
//       justifyContent: "center", 
//       alignItems: "center",
//       flexDirection: "row",
//     }}>
//       {data?.map((_, i) => {
//         const inputRange = [(i - 1 ) * width, i * width, (i + 1) * width];
//         const measurement = scrollX.interpolate({
//           inputRange,
//           outputRange: [8, 8, 8],
//           extrapolate: "clamp"
//         })

//         const bg = scrollX.interpolate({
//           inputRange,
//           outputRange: ["#cac8be63", "#C680DE", "#cac8be63"],
//           extrapolate: "clamp"
//         })

//         return (
//           <Animated.View key={`indicator-${i}`}style={{
//             width: measurement,
//             height: measurement,
//             backgroundColor: bg,
//             borderRadius: 20,
//             margin: 5
//           }}></Animated.View>
//         )
//       })}
//     </View>
//   )
// }

// const Welcome = () => {


//   const scrollX = useRef(new Animated.Value(0)).current;

//   return (
//     <>
//       <Animated.FlatList 
//         horizontal
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => <SlideItem item={item} />}
//       />
//       <View style={{ marginVertical: 30 }}>
//         <Indicator scrollX={scrollX} />
//       </View>
//     </>
//   )
// }

// export default 

import React from "react";
import { Dimensions, FlatList, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import data from "./data";

const CustomSlider = () => {
  return (
    <Carousel 
        width={Dimensions.get("screen").width}
        loop
        pagingEnabled={true}
        snapEnabled={true}
    />
  )
}

export default CustomSlider;