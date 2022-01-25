import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const AboutUsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profilName}>Jaloliddin Esonboyev</Text>

            <Text style={styles.text}>
                Universitetimning to’lov-shartnoma summasi to’lashim kerak,
                shuningdek, akam - II guruh nogironi, Xudo xohlasa, o’zim yangi
                biznes boshlamoqchiman. Xalqimizga manfaatli bo’lsa, xursand
                bo’laman. Yaxshi insonlar menga yordam berishsa juda xursand
                bo’lardim va duo qilardim. InshaAlloh barchasini qaytaraman.
            </Text>
            <Text style={styles.text}>
                Universitetimning to’lov-shartnoma summasi to’lashim kerak,
                shuningdek, akam - II guruh nogironi, Xudo xohlasa, o’zim yangi
                biznes boshlamoqchiman. Xalqimizga manfaatli bo’lsa, xursand
                bo’laman. Yaxshi insonlar menga yordam berishsa juda xursand
                bo’lardim va duo qilardim. InshaAlloh barchasini qaytaraman.
            </Text>

            <TouchableOpacity style={styles.connectPhone}>
                <Feather
                    style={styles.CPIcon}
                    name="phone"
                    size={26}
                    color="black"
                />
                <View>
                    <Text
                        style={{
                            marginLeft: 16,
                            marginBottom: 10,
                            fontSize: 17,
                        }}
                    >
                        Bog'lanish:
                    </Text>
                    <Text
                        style={{
                            marginLeft: 16,
                            fontSize: 19,
                            fontWeight: "500",
                        }}
                    >
                        +998-91-000-00-00
                    </Text>
                </View>
            </TouchableOpacity>
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
    text: {
        fontSize: 17,
        marginBottom: 12,
    },
    connectPhone: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    CPIcon: {
        borderRadius: 13,
        backgroundColor: colors.gray,
        padding: 10,
    },
});

export default AboutUsScreen;
