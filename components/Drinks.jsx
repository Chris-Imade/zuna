import React from "react";
import { Text, View } from "react-native";
import { colors } from "./shared";

const Drinks = () => {
    return (
        <View style={{
            backgroundColor: colors.bgGray,
            flex: 1
        }}>
            <Text>Hi from Drinks</Text>
        </View>
    )
}

export default Drinks;