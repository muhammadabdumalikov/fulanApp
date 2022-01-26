import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profilName}>Jaloliddin Esonboyev</Text>

            <View style={styles.secondLine}>
                <View>
                    <Text style={styles.preTxt}>Tug'ilgan yili</Text>
                    <Text style={styles.secondLineTxt}>12.03.1996</Text>
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
                    <Text style={styles.secondLineTxt}>Rasmiy</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    profilName: {
        fontSize: 22,
        fontWeight: "700",
        // fontFamily: "Roboto",
        marginBottom: 18,
        marginTop: 28
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
    preTxt: {
        color: "gray",
        fontSize: 15,
    },
});

export default ProfileScreen;
