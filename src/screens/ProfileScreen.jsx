import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profilName}>Jaloliddin Esonboyev</Text>

            <View style={styles.secondLine}>
                <View>
                    <Text style={styles.preTxt}>Tug'ilgan yili:</Text>
                    <Text style={styles.secondLineTxt}>12.03.1996</Text>
                </View>
                <View
                    style={{
                        height: "100%",
                        borderLeftColor: "rgba(0, 0, 0, 0.1)",
                        borderLeftWidth: 1,
                    }}
                />
                <View>
                    <Text style={styles.preTxt}>Ta'minot turi:</Text>
                    <Text style={styles.secondLineTxt}>Rasmiy</Text>
                </View>
            </View>

            <View style={styles.stateLine}>
                <Text style={styles.preTxt}>Tug'ilgan viloyati:</Text>
                <Text style={styles.secondLineTxt}>12.03.1996</Text>
            </View>

            <View style={{ ...styles.stateLine, borderTopWidth: 0 }}>
                <Text style={styles.preTxt}>
                    Yordam olishga sababi (qisqa):
                </Text>
                <Text style={styles.secondLineTxt}>
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                </Text>
            </View>

            <View style={{ ...styles.stateLine, borderTopWidth: 0 }}>
                <Text style={styles.preTxt}>Qo'shimcha ma'lumotlar:</Text>
                <Text style={styles.secondLineTxt}>
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                    Universitetimning to'lov-shartnoma summasini to'lash uchun
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "white",
    },
    profilName: {
        fontSize: 22,
        fontWeight: "700",
        // fontFamily: "Roboto",
        marginBottom: 18,
        marginTop: 28,
    },
    secondLine: {
        flex: 2,
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
    },
    secondLineTxt: {
        fontSize: 17,
        fontWeight: "500",
    },
    preTxt: {
        color: "gray",
        fontSize: 15,
    },
    stateLine: {
        paddingVertical: 18,
        borderTopColor: "rgba(0, 0, 0, 0.1) ",
        borderTopWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 1,
    },
});

export default ProfileScreen;
