import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "./shared";

const Button = ({ content, btnText }) => {
    return (
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => {}}>
                <Text style={btnText}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        borderRadius: 30,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 30,
        width: "100%",
        zIndex: 1,
    }
})
export default Button;