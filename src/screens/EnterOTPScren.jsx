import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
} from "react-native";
import CountDown from "react-native-countdown-component";

import { colors } from "../constants/colors";

export default function EnterOTPScreen({ navigation, route }) {
    // let phoneNumber = route.params.phone;
    let firstInput = useRef();
    let secondInput = useRef();
    let thirdInput = useRef();
    let fourthInput = useRef();
    let fifthInput = useRef();
    let sixthInput = useRef();
    let [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });
    let [resendOtp, setResendOtp] = useState(true);

    // useEffect(()=> {
    //     setResendOtp(true)
    // }, [])

    // useEffect(()=> {
    //     setResendOtp(false)
    // }, [resendOtp])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            // contentContainerStyle={{flex: 1}}
            keyboardVerticalOffset={108}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={{ marginTop: 24 }}>
                        <Text style={styles.txt}>Ro'yxatdan o'tish</Text>

                        <View style={styles.timer}>
                            <CountDown
                                size={32}
                                until={90}
                                onFinish={() => {
                                    setTimeout(() => {
                                        setResendOtp(false);
                                    }, 10);
                                }}
                                digitTxtStyle={{
                                    color: "black",
                                    fontSize: 32,
                                    fontWeight: "400",
                                }}
                                digitStyle={{
                                    height: 20,
                                    width: 50,
                                }}
                                style={{
                                    justifyContent: "center",
                                }}
                                separatorStyle={{
                                    color: "black",
                                    fontSize: 32,
                                }}
                                timeToShow={["M", "S"]}
                                timeLabels={{ m: null, s: null }}
                                showSeparator
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginHorizontal: 24,
                                marginTop: 8,
                            }}
                        >
                            <Text style={styles.phoneNum}>
                                {" "}
                                +{`${122333}`}{" "}
                            </Text>
                            <Text style={styles.msg}>
                                raqamiga sms kod yuborildi
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.otpContainer}>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={firstInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 1: text });
                                            text && secondInput.current.focus();
                                        }}
                                    />
                                </View>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={secondInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 2: text });

                                            text
                                                ? thirdInput.current.focus()
                                                : firstInput.current.focus();
                                        }}
                                    />
                                </View>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={thirdInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 3: text });

                                            text
                                                ? fourthInput.current.focus()
                                                : secondInput.current.focus();
                                        }}
                                    />
                                </View>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={fourthInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 4: text });

                                            text
                                                ? fifthInput.current.focus()
                                                : thirdInput.current.focus();
                                        }}
                                    />
                                </View>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={fifthInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 5: text });

                                            text
                                                ? sixthInput.current.focus()
                                                : fourthInput.current.focus();
                                        }}
                                    />
                                </View>
                                <View style={styles.otpBox}>
                                    <TextInput
                                        style={styles.otpTxt}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        ref={sixthInput}
                                        onChangeText={(text) => {
                                            setOtp({ ...otp, 6: text });

                                            !text && fifthInput.current.focus();
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                        <Pressable style={styles.resendBtn}>
                            <Text style={styles.resendTxt}>Qayta yuborish</Text>
                        </Pressable>
                    </View>

                    <Pressable
                        style={styles.continueWrapper}
                        onPress={() => {
                            console.log(
                                `${otp["1"]}${otp["2"]}${otp["3"]}${otp["4"]}${otp["5"]}${otp["6"]}`
                            );
                            navigation.navigate("EnterOwnPasswordScreen");
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
        marginHorizontal: 16,
    },
    msg: {
        fontSize: 15,
        fontWeight: "400",
        color: "black",
        alignItems: "center",
    },
    phoneNum: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        textAlignVertical: "center",
        marginRight: 4,
    },
    editIcon: {
        height: 22,
        width: 22,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(79, 27, 160, 0.1)",
        borderRadius: 4,
    },
    form: {
        width: Dimensions.get("screen").width / 1.1,
        height: Dimensions.get("screen").height / 10,
        justifyContent: "flex-end",
        alignSelf: "center",
        marginTop: 28,
        borderRadius: 12,
        padding: 16,
    },
    otpContainer: {
        minHeight: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    otpBox: {
        borderRadius: 6,
        borderBottomWidth: 1,
        width: 40,
        marginHorizontal: 7,
        height: "100%",
        borderBottomColor: "black",
    },
    otpTxt: {
        fontSize: 20,
        fontWeight: "600",
        padding: 0,
        textAlign: "center",
        // paddingHorizontal: 18,
        paddingVertical: 10,
    },
    resendBtn: {
        marginLeft: 24,
    },
    resendTxt: {
        color: colors.brandColor,
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 5,
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
