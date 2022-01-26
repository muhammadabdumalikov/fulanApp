import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const SendBtn = ({text}) => {
    return (
        <TouchableOpacity style={styles.seeNumberBtn}>
            <Text style={styles.seeNumberTxt}>{`${text}`}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    seeNumberBtn: {
        height: 60,
        marginTop: 10,
        borderRadius: 12,
        backgroundColor: colors.brandColor,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 70,
    },
    seeNumberTxt: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
});

export default SendBtn;
