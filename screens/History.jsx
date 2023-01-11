import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { colors } from "../components/shared";
import { images } from "../assets/images/index";
import Button from "../components/Button";

const History = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 30
        }}>
            <View></View>
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image 
                    source={images.History}
                    style={{
                        width: 107,
                        height: 117
                    }}
                    resizeMode={"contain"}
                />
                <Text style={{
                    width: 193,
                    textAlign: "center",
                    fontSize: 28,
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontWeight: "800",
                    marginTop: 20
                }}
                >No history yet</Text>
            </View>
            <Button btnText={styles.btnText} content={"Start Ordering"} />
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.white,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold"
    }
});

export default History;