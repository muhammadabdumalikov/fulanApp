import React from "react";
import { Text, View, ScrollView, StyleSheet, StatusBar } from "react-native";
import Input from "../components/InputComponent";

const UserProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Input placeholder="To'liq ism-familiya" />
            <Input placeholder="Telefon raqami" />
            <Input placeholder="Qo'shimcha telefon raqami" />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        backgroundColor: "white",
    },
});
export default UserProfileScreen;
