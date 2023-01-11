import { Radio } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, ScrollView, } from "react-native";
import { images } from "../assets/images";
import { Card } from "../components";
import Button from "../components/Button";
import { colors } from "../components/shared";

const Payment = () => {

    // Delivery Method
    const [deliveryMethod, setDeliveryMethod] = useState("door");
    const [Payment, setPayment] = useState("card");


    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: colors.bgGray,
            paddingHorizontal: 40,
            width: "100%"
        }}>
            <View>
                <Text style={{
                    fontSize: 34,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    fontWeight: 'bold',
                    marginTop: 35
                }}>Payment</Text>
                

                <Card accessText={"payment method"} radioName={"payment"} state={Payment} setState={setPayment} val1={"card"} text1={"Card"} val2={"bank"} text2={"Bank"} type={"payment1"} />
                
                <Card accessText={"delivery method"} radioName={"delivery"} state={deliveryMethod} setState={setDeliveryMethod} val1={"door-to-door"} text1={"Door delivery"} val2={"pick-up"} text2={"Pick Up"} />

            </View>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 70
            }}>
                <Text style={{ fontSize: 17, fontFamily: "SF-Pro-Rounded-Regular"}}>Total</Text>
                <Text style={{ fontSize: 22, fontWeight: "bold", fontFamily: "SF-Pro-Rounded-Regular" }}>$23,000</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "row"
            }}>
                <Button btnText={styles.btnText} content={"Proceed to checkout"} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.white,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold",
    },
    int: {
        fontSize: 17,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold",
        marginVertical: 6,
        paddingVertical: 12,
        paddingHorizontal: 15,
        outlineWidth: 0,
        outline: "none",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    }
})


export default Payment;