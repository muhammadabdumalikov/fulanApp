import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ToggleDrawer = () => {
    const navigation = useNavigation();
    console.log(navigation)
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="list" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default ToggleDrawer;
