import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeIcon } from "react-native-heroicons/outline";
import {  MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { colors } from "../components/shared";
import { 
    AuthTab, 
    FoodDetails, 
    History, 
    Home, 
    Payment, 
    Welcome 
} from "../screens";
import { images } from "../assets/images";

const WorkFlow = () => {

    const [user, setUser] = React.useState(true);



    const Tab = createBottomTabNavigator();

    const AppTabs = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        shadowColor: colors.bgGray,
                        borderWidth: 0
                    },
                    headerRight: () => <MaterialIcons  name="shopping-cart" size={24} color={colors.gray} />,
                    headerRightContainerStyle: {
                        paddingRight: 30
                    }
                }} 
                initialRouteName={"Home"}
                >
                <Tab.Screen 
                    options={{
                        tabBarLabelStyle: {
                            display: "none"
                        },
                        tabBarStyle: {
                            backgroundColor: colors.bgGray,
                            elevation: 0,
                            shadowColor: "transparent",
                            justifyContent: "center",
                            // alignItems: "center"
                        },
                        tabBarIcon: ({ focused, color, size }) => focused 
                        ? <Image source={images.HomeIcon} style={{ width: 42, height: 42 }} resizeMode={"contain"} /> 
                        : <HomeIcon size={24} color={"#ADADAF"} />
                    }}
                    name="Home" 
                    component={Home} 
                />
                <Tab.Screen 
                    options={{
                        tabBarLabelStyle: {
                            display: "none"
                        },
                        tabBarStyle: {
                            backgroundColor: colors.bgGray,
                            elevation: 0,
                            shadowColor: "transparent",
                            justifyContent: "center",
                            // alignItems: "center"
                        },
                        tabBarIcon: ({ focused, color, size }) => focused 
                        ? <Image source={images.HeartSolid} style={{ width: 42, height: 42 }} resizeMode={"contain"} /> 
                        : <Image source={images.heartOutline} style={{ width: 20, height: 20 }} resizeMode={"contain"} />
                    }}
                    name="Payment" 
                    component={Payment} 
                />
                <Tab.Screen 
                    options={{
                        tabBarLabelStyle: {
                            display: "none"
                        },
                        tabBarStyle: {
                            backgroundColor: colors.bgGray,
                            elevation: 0,
                            shadowColor: "transparent",
                            justifyContent: "center",
                            // alignItems: "center"
                        },
                        tabBarIcon: ({ focused, color, size }) => focused 
                        ? <Image source={images.userSolid} style={{ width: 42, height: 42 }} resizeMode={"contain"} /> 
                        : <Image source={images.userOutline} style={{ width: 20, height: 20 }} resizeMode={"contain"} />
                    }}
                    name="FoodDetails" 
                    component={FoodDetails} 
                />
                <Tab.Screen 
                    options={{
                        tabBarLabelStyle: {
                            display: "none"
                        },
                        tabBarStyle: {
                            backgroundColor: colors.bgGray,
                            elevation: 0,
                            shadowColor: colors.bgGray,
                            justifyContent: "center"
                        },
                        tabBarIcon: ({ focused, color, size }) => focused 
                        ? <MaterialIcons name="history" color={colors.primary} size={24} /> 
                        : <MaterialIcons name="history" color={colors.gray} size={24} />
                    }}
                    name="History" 
                    component={History} 
                />
            </Tab.Navigator>
        )
    }


    const Stack = createNativeStackNavigator();

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Welcome" component={Welcome} />
                <Stack.Screen 
                    options={{
                        headerShown: false
                    }}
                    name="Auth" component={AuthTab} />
            </Stack.Navigator>
        )
    }



    if(user) {
        return (
            <AppTabs />
        )
    } else {
        return (
            <AuthStack />
        )
    }
}

export default WorkFlow;