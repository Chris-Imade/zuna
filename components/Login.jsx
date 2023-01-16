import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import { colors } from "./shared";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1, marginHorizontal: 25, marginTop: 30 }}>
            <View style={{ flex: 2 }}>
                <View style={{ marginBottom: 12 }}>
                    <Text>Email address</Text>
                    <TextInput 
                        placeholder="user@zuna.com"
                        style={{
                            paddingHorizontal: 0,
                            paddingVertical: 8,
                            marginVertical: 5,
                            paddingHorizontal: 10,
                            outline: "none",
                            width: "100%",
                            backgroundColor: "#F0F0F0",
                            borderRadius: 4
                        }}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput 
                        placeholder="........"
                        secureTextEntry={true}
                        style={{
                            paddingHorizontal: 0,
                            paddingVertical: 8,
                            marginVertical: 5,
                            paddingHorizontal: 10,
                            outline: "none",
                            width: "100%",
                            backgroundColor: "#F0F0F0",
                            borderRadius: 4
                        }}
                        onChangeText={(password) => setPassword(email)}
                    />
                </View>
                <TouchableOpacity
                onPress={() => {}}>
                    <Text 
                    style={{
                    fontSize: 17,
                    color: colors.primary,
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontWeight: "500",
                    marginTop: 9
                }}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <Button content={"Login"} btnText={styles.btnText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: colors.white,
        fontSize: 17,
        fontFamily: "SP-Pro-Rounded-Regular",
        fontWeight: 400
    },
    emailText: {
        fontFamily: "SF-Pro-Rounded-Regular",
        fontSize: 15
    },
    inputTxt: {
        fontSize: 17,
        fontWeight: "500",
        fontFamily: "SF-Pro-Rounded-Regular"
    }
})

export default Login;