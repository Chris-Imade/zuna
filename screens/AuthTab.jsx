import React, { useState } from "react";
import { View, StyleSheet, Image,Text, TouchableOpacity } from "react-native";
import { images } from "../assets/images";
import { Login, SignUp } from "../components";
import { colors } from "../components/shared";

const AuthTab = () => {

    const [activeTab, setActiveTab] = useState("login");

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.lightGray
        }}>
            <View style={styles.tabContainer}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image 
                        source={images.Logo}
                        style={{
                            width: 180,
                            height: 180
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={[styles.tabBtn, activeTab === "login" ? styles.active : null]} onPress={() => setActiveTab("login")}>
                        <Text style={styles.tabText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabBtn, activeTab === "sign-up" ? styles.active : null]} onPress={() => setActiveTab("sign-up")}>
                        <Text style={styles.tabText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                {activeTab === "login" ? (
                    <Login />
                ) : activeTab === "sign-up" ? (
                    <SignUp />
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: { 
        flex: 1, 
        backgroundColor: colors.white,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    tabText: {
        fontSize: 18,
        fontFamily: "SF-Pro-Rounded-Regular",
        fontWeight: "bold",
    },
    tabBtn: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    active: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    }
});

export default AuthTab;