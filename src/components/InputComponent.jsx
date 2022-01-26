import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, subTxt }) => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder={`${placeholder}`} />
            {subTxt && <Text style={styles.subTxt}>{`${subTxt}`}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 14
    },
    input: {
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        marginBottom: 6,
        fontSize: 17,
    },
    subTxt: {
        fontStyle: "italic",
        fontSize: 13,
        color: "rgba(0, 0, 0, 0.3)"
    },
});

export default Input;
