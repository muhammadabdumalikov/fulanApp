import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={26} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Fulan</Text>
                <TouchableOpacity
                    style={styles.profile}
                    onPress={() => navigation.openDrawer()}
                >
                    <Feather name="user" size={26} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
    },
    headerTxt: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "500"
    },
    profile: {
        backgroundColor: "#EFEFF0",
        padding: 4,
        borderRadius: 17,
    },
});

export default HomeScreen;
