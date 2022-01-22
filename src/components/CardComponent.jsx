import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CardComponent = ({item}) => {
    return (
        <View style={styles.box}>
            <View>
                <Feather name="user" size={26} color="black" />
                <Text>{`${item.firstName} ${item.lastName}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: "100%",
        height: 170,
        borderRadius: 12,
        backgroundColor: "#EAFBFF",
        marginBottom: 10
    }
})

export default CardComponent;
