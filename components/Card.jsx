import { Radio, View } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import { images } from "../assets/images";
import { colors } from "./shared";

const Card = ({ state, setState, accessText, radioName, val1, text1, val2, text2, type }) => {
    return (
        <View>
            <Text style={{
                    fontWeight: "bold",
                    marginTop: 42,
                    marginBottom: 20
            }}>Payment Method</Text>
            <View style={{
                    borderRadius: 20,
                    padding: 20,
                    backgroundColor: colors.white,
            }}>
            <View>
                <Radio.Group name={radioName} accessibilityLabel={accessText} value={state} onChange={nextValue => {
                    setState(nextValue);
                }}>
                    <Radio colorScheme="red" 
                    style={{ 
                        fontSize: 17, 
                        fontFamily: "SF-Pro-Rounded-Regular", 
                        marginBottom: 15,
                    }} value={val1} my={1}>
                        {type === "payment1" ? (
                            <Image
                                source={images.Card}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        ) : null}
                        <Text>{text1}</Text>
                    </Radio>
                    <View style={{ flex: 1, justifyContent: "center", width: "100%", height: 1, alignItems: "center" }}>
                        <View style={{ width: "85%", backgroundColor: colors.gray, height: 1, marginVertical: 20 }}></View>
                    </View>
                    <Radio colorScheme="red" style={{ 
                        fontSize: 17, 
                        fontFamily: "SF-Pro-Rounded-Regular", 
                        marginTop: 5 ,
                        alignItems: "center",
                    }} value={val2} my={1}>
                        {type === "payment1" ? (
                            <Image 
                                source={images.Bank}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        ) : null }
                        <Text>{text2}</Text>
                    </Radio>
                </Radio.Group>
                
            </View>
            </View>
        </View>
    )
}

export default Card;