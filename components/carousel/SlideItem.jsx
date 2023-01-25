import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../shared";

const SlideItem = ({ item }) => {
    return (
        <View style={{ width: "100%"}}>
            <Image
              source={item.source} 
              style={{
                width: 250,
                height: 250
              }}
              resizeMode={"contain"}
              />
          </View>
    )
}

export default SlideItem;