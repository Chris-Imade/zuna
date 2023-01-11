import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { images } from "../assets/images";
import { colors } from "../components/shared";
import { Button } from "../components";


const Welcome = () => {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{
            paddingTop: 50,
            flex: 1,
        }}>
            <Image 
            resizeMode='contain'
            source={images.Logo}
            style={{
                width: 73,
                height: 73,
            }}
            />
            <Text style={styles.bigText}>Food for Everyone</Text>
        </View>
        <View style={{ flex: 2, width: "100%", height: "100%" }}>
            <Image 
                source={images.Persons}
                resizeMode={"cover"}
                style={{
                    width: "100%",
                    height: "100%",
                    marginTop: 100 
                }}
            />
            <Image 
                source={images.Blur}
                resizeMode={"cover"}
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    marginTop: -170
                }}
            />

        </View>
        
        <View style={{
            width: "100%",
        }}>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => {}}>
                    <Text style={styles.btnText}>{"Get Started"}</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "space-between",
    },
    btnStyle: {
        borderRadius: 30,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 30,
        marginHorizontal: 30,
        zIndex: 10,
        position: "relative",
    },
    bigText: {
        color: colors.primary,
        fontFamily: "SF-Pro-Rounded-Bold",
        fontWeight: "800",
        fontSize: 65,
        lineHeight: 65,
        marginTop: 37
    },
    btnText: {
        color: colors.primary,
        fontFamily: "SF-Pro-Rounded-Regular",
    }
  });

export default Welcome;