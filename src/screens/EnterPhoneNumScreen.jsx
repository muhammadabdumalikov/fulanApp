import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Input from "../components/InputComponent";

import { colors } from "../constants/colors";

export default function EnterPhoneNumScreen({ navigation, route }) {
    const [phone, setPhone] = useState();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            // contentContainerStyle={{flex: 1}}
            keyboardVerticalOffset={108}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={{ padding: 24 }}>
                        <Text style={styles.txt}>Ro'yxatdan o'tish</Text>

                        <Input
                            placeholder="Telefon raqamingiz"
                            keyboardType="phone-pad"
                            onChange={(value) => setPhone(value)}
                            maxLength={12}
                        />
                    </View>

                    <Pressable
                        style={styles.continueWrapper}
                        onPress={async () => {
                            try {
                                console.log(typeof phone)
                                if (phone.length > 11) {
                                    let code = await fetch(
                                        "https://fulan.pixer.uz/api/users/account",
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                            body: {
                                                user_phone: phone,
                                            },
                                        }
                                    );
                                    console.log(await code.json());
                                    // navigation.navigate("EnterOTPScreen", {
                                    //     phone: phone,
                                    // });
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    >
                        <Text style={styles.continue}>Davom etish</Text>
                    </Pressable>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    txt: {
        fontSize: 22,
        fontWeight: "700",
        lineHeight: 26,
        marginVertical: 24,
        // marginHorizontal: 16,
    },
    continueWrapper: {
        height: 60,
        width: 343,
        alignSelf: "center",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.brandColor,
        borderRadius: 12,
    },
    continue: {
        fontSize: 15,
        fontWeight: "700",
        color: "white",
    },
});
