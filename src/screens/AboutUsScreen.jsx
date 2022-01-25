import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const AboutUsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profilName}>Jaloliddin Esonboyev</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    profilName: {
        fontSize: 22,
        fontWeight: "700",
        // fontFamily: "Roboto",
        marginBottom: 18,
        marginTop: 28,
    },
});

export default AboutUsScreen;
