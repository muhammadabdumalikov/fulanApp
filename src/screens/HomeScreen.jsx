import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "../constants/colors";

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

            {/* //Search input ------------------------------------------------ */}
            <View style={styles.searchBox}>
                <Feather
                    style={styles.searchIcon}
                    name="search"
                    size={22}
                    color="black"
                />
                <TextInput style={styles.searchTxt} placeholder="Qidirish" />
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
        fontWeight: "500",
    },
    profile: {
        backgroundColor: colors.gray,
        padding: 6,
        borderRadius: 19,
    },
    searchBox: {
        width: "100%",
        height: 36,
        backgroundColor: colors.gray,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginTop: 17,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIco: {
        width: "10%",
    },
    searchTxt: {
        width: "80%",
        paddingLeft: 10,
        fontSize: 17
    },
});

export default HomeScreen;
