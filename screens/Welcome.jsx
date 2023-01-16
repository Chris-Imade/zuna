import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { images } from "../assets/images";
import { colors } from "../components/shared";

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.initialContent}>
                <Image 
                    source={images.Logo}
                    style={{
                        width: 73,
                        height: 73
                    }}
                    resizeMode={"contain"}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.initialText}>Food for</Text>
                    <Text style={styles.initialText}>Everyone</Text>
                </View>
            </View>

            <View>
                <Image 
                    source={images.Persons}
                    resizeMode={"contain"}
                    style={{
                        width: 552.38,
                        height: 483.05
                    }}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate("Auth")}>
                    <Text style={styles.actionTxt}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },
    initialContent: {
        padding: 30,
        flex: 1
    },
    initialText: {
        fontFamily: "SF-Pro-Rounded-Bold",
        fontWeight: "800",
        fontSize: 65,
        color: colors.white,
        lineHeight: 60
    },
    textContainer: {
        marginTop: 31,
        marginBottom: 75
    },
    actionTxt: {
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "600",
        fontSize: 17,
        color: colors.primary,
    },
    actionBtn: {
        // marginTop: -20,
        backgroundColor: colors.white,
        width: "80%",
        paddingVertical: 25,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnContainer: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        alignItems: "center",
        bottom: 30
    }
});

export default Welcome;