import React from "react";
import { FlatList, View } from "react-native";
import { dishes } from "../assets/images/dishes";
import FoodCard from "./FoodCard";
import { colors } from "./shared";

const Foods = () => {

    const data = [
        {
            id: 1,
            image: dishes.dish4,
            firstTitle: "Veggie",
            secondTitle: "tomato mix",
            price: "N1,900"
        },
        {
            id: 2,
            image: dishes.dish4,
            firstTitle: "Veggie",
            secondTitle: "tomato mix",
            price: "N1,900"
        },
        {
            id: 3,
            image: dishes.dish4,
            firstTitle: "Veggie",
            secondTitle: "tomato mix",
            price: "N1,900"
        },
        {
            id: 4,
            image: dishes.dish4,
            firstTitle: "Veggie",
            secondTitle: "tomato mix",
            price: "N1,900"
        }
    ]

    return (
        <View style={{
            backgroundColor: colors.bgGray,
            width: "100%",
            paddingVertical: 30,
            paddingLeft: 30,
            flex: 1
        }}>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <FoodCard  firstTitle={item.firstTitle}  secondTitle={item.secondTitle}   image={item.image} price={item.price} key={item.id}/>}
            />
        </View>
    )
}

export default Foods;