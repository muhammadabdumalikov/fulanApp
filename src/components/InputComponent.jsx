import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Input = ({
    placeholder,
    subTxt,
    onChange,
    onEnd,
    value,
    keyboardType = "default",
}) => {
    return (
        <View style={styles.inputWrapper}>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(0, 0, 0, 0.1)",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <TextInput
                    style={styles.input}
                    placeholder={`${placeholder}`}
                    onChangeText={onChange}
                    onEndEditing={onEnd}
                    value={value}
                    keyboardType={keyboardType}
                />
                {value ? (
                    <TouchableOpacity>
                        <MaterialIcons
                            name="cancel"
                            size={22}
                            color="rgba(142, 142, 147, 1)"
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            {subTxt && <Text style={styles.subTxt}>{`${subTxt}`}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 14,
        width: "100%",
    },
    input: {
        height: 44,
        marginBottom: 6,
        fontSize: 17,
    },
    subTxt: {
        fontStyle: "italic",
        fontSize: 13,
        color: "rgba(0, 0, 0, 0.3)",
    },
});

export default Input;
