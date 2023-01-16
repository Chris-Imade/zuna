import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Button from "../components/Button";
import CustomSlider from "../components/carousel/CustomSlider";
import { colors } from "../components/shared";

const FoodDetails = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 20,
            backgroundColor: colors.foodBg
        }}>
            <View style={{
                flex: 1
            }}>
                <CustomSlider />
            </View>
            <View style={{
                flex: 1
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    marginBottom: 43
                }}>
                    <Text style={{
                        fontFamily: "SF-Pro-Rounded-Bold",
                        fontSize: 28,
                    }}>Veggie tomato mix</Text>
                    <Text style={{
                        fontFamily: "SF-Pro-Rounded-Bold",
                        color: colors.primary,
                        fontSize: 22,
                    }}>N1,900</Text>
                </View>
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
        </SafeAreaView>
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