import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductSearch = () => {
    return (
        <View style={styles.container}>
            <Text>Product Search Working!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    }
});

export default ProductSearch;