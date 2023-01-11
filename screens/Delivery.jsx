import { Radio } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView, } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import { colors } from "../components/shared";

const Delivery = () => {

    // Delivery Method
    const [deliveryMethod, setDeliveryMethod] = useState("door")
    const [userName, setUserName] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPhone, setUserPhone] = useState("");
    console.log(userName, userAddress, userPhone);

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{
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
                }}>Delivery</Text>
                <View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 45
                    }}>
                        <Text  style={{
                            fontWeight: "bold",
                        }}>
                            Address details
                        </Text>
                       <TouchableOpacity>
                        <Text style={{
                                color: colors.primary
                            }}>change</Text>
                       </TouchableOpacity>
                    </View> 
                    <View style={{
                        borderRadius: 20,
                        padding: 20,
                        backgroundColor: colors.white,
                        marginTop: 20
                    }}>
                        <TextInput 
                            style={styles.int}
                            placeholder="Your name"
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                        />
                        <TextInput 
                            style={styles.int}
                            placeholder="Your address"
                            value={userAddress}
                            onChangeText={(text) => setUserAddress(text)}
                        />
                        <TextInput 
                            style={styles.int}
                            keyboardType="number-pad"
                            placeholder="Your phone no."
                            value={userPhone}
                            onChangeText={(text) => setUserPhone(text)}
                        />
                    </View>
                </View>

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


export default Delivery;