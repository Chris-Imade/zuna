import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "./shared";

const FoodCard = ({ image, price, firstTitle, secondTitle }, props) => {

    console.log(props);
    return (
        <TouchableOpacity 
            style={{
                borderRadius: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 70,
                marginBottom: 20,
                marginRight: 30,
                height: 180,
                width: 160,
                shadowOffset: { height: 20, width: 12 },
                shadowRadius: 30,
                shadowColor: colors.lightGray
                // position: "relative"
            }}
            onPress={() => {}}>
                <Image 
                    source={image}
                    style={{
                        width: 130,
                        height: 130,
                        marginTop: -50
                    }}
                    resizeMode={"contain"}
                />
                <View style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "600",
                        fontFamily: "SF-Pro-Rounded-Bold"
                    }}>{firstTitle}</Text>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "600",
                        fontFamily: "SF-Pro-Rounded-Bold"
                    }}>{secondTitle}</Text>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: "700",
                        fontFamily: "SF-Pro-Rounded-Bold",
                        color: colors.primary,
                        marginTop: 15,
                        marginBottom: 30
                    }}>{price}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default FoodCard;