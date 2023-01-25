import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { HomeTabs } from "../components";
import { colors } from "../components/shared";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation();

    return (
          <>
                <View style={{
                    backgroundColor: colors.bgGray,
                    marginTop: 60
                }}>
                    <View style={{ paddingHorizontal: 30, marginVertical: 20 }}>
                        <Text style={styles.titleText}>Delicious</Text>
                        <Text style={styles.titleText}>food for you</Text>
                    </View>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Search")}
                        style={{
                            marginHorizontal: 20, 
                            marginBottom: 28,
                            marginTop: 26,
                            flexDirection: "row",
                            paddingHorizontal: 25,
                            height: 45,
                            backgroundColor: "#EFEEEE",
                            borderRadius: 30,
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Feather size={18} name={"search"} />
                            {/* Search Input */}
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor={colors.gray}
                                style={{
                                    flex: 1,
                                    marginLeft: 24,
                                    paddingVertical: 10,
                                    outline: "none"
                                }}
                            />
                    </TouchableOpacity>
                </View>

                <HomeTabs />
          </>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "SF-Pro-Rounded-Bold",
        fontWeight: "700",
        fontSize: 34
    }
})

export default Home;