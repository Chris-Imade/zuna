import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../assets/images";
import { Button } from "../components";
import { colors } from "../components/shared";

const Order = () => {
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
                alignItems: "center",
            }}>
                <Image 
                    source={images.Order}
                    style={{
                        width: 107,
                        height: 117
                    }}
                />
                <Text style={{
                    width: 193,
                    textAlign: "center",
                    fontSize: 28,
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontWeight: "800",
                    marginTop: 20
                }}>
                    No Orders yet
                </Text>
                <Text style={{
                    width: 220,
                    textAlign: "center",
                    fontSize: 17,
                    fontFamily: "SF-Pro-Rounded-Regular",
                    color: colors.gray,
                }}>
                    Hit the Orange button down below to create an order
                </Text>
            </View>
            <Button btnText={styles.btnText} content={"Start Ordering"} />
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.white,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold",
    }
});

export default Order;