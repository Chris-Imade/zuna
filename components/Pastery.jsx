import React from "react";
import { Text, View } from "react-native";
import { colors } from "./shared";

const Pastery = () => {
    return (
        <View style={{
            backgroundColor: colors.bgGray,
            flex: 1
        }}>
            <Text>Snacks</Text>
        </View>
    )
}


export default Pastery;