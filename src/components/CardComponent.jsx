import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const CardComponent = ({ item }) => {
    return (
        <View style={styles.box}>
            <View style={styles.nameLine}>
                <Feather name="user" size={26} color={colors.brandColor} />
                <Text
                    style={styles.nameTxt}
                >{`${item.firstName} ${item.lastName}`}</Text>
            </View>

            <View style={styles.secondLine}>
                <View>
                    <Text style={styles.preTxt}>Tug'ilgan yili</Text>
                    <Text style={styles.secondLineTxt}>{`${item.bDate}`}</Text>
                </View>
                <View
                    style={{
                        height: "100%",
                        borderLeftColor: "gray",
                        borderLeftWidth: 0.5,
                    }}
                />
                <View>
                    <Text style={styles.preTxt}>Ta'minot turi</Text>
                    <Text style={styles.secondLineTxt}>{`${item.type}`}</Text>
                </View>
            </View>

            <View style={styles.thirddLine}>
                <View>
                    <Text style={styles.preTxt}>Summa</Text>
                    <Text
                        style={styles.thirddLineTxt}
                    >{`${item.summ} so'm`}</Text>
                </View>
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
        marginBottom: 10,
        padding: 15,
    },
    nameLine: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    secondLine: {
        flex: 2,
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    secondLineTxt: {
        fontSize: 17,
        fontWeight: "500",
    },
    thirddLine: {
        flex: 3,
        width: "70%",
        justifyContent: "center",
    },
    thirddLineTxt: {
        fontSize: 20,
        fontWeight: "500",
    },
    nameTxt: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "500",
        color: colors.brandColor,
    },
    preTxt: {
        color: "gray",
        fontSize: 15,
    },
});

export default CardComponent;
