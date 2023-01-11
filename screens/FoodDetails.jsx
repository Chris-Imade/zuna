import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Button from "../components/Button";
import { colors } from "../components/shared";

const FoodDetails = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            marginHorizontal: 20
        }}>
            <View style={{
                flex: 1
            }}>
                {/* Slider */}
            </View>
            <View style={{
                flex: 1
            }}>
                <View>
                    <Text style={{
                        fontSize: 17
                    }}>Delivery info</Text>
                    <Text style={{
                        color: colors.gray,
                        fontSize: 15
                    }}>Delivered between monday aug and thursday 20 from 8pm to 9:32pm</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 17
                    }}>Return Policy</Text>
                    <Text style={{
                        color: colors.gray,
                        fontSize: 15,
                        marginTop: 12
                    }}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: "row"
                }}>
                    <Button btnText={styles.btnText} content={"Start Ordering"} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    btnText: {
        color: colors.white,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold",
    }
})

export default FoodDetails