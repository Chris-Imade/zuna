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
                marginTop: 50,
                marginRight: 30,
                height: 270,
                width: 220,
                shadowOffset: { height: 20, width: 12 },
                shadowRadius: 30,
                shadowColor: colors.lightGray
                // position: "relative"
            }}
            onPress={() => {}}>
                <Image 
                    source={image}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: -90
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