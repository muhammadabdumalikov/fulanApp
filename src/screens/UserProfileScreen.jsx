import React from "react";
import { Text, View, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Radio, Stack } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import Input from "../components/InputComponent";
import { colors } from "../constants/colors";
import SendBtn from "../components/SendBtn";

const UserProfileScreen = () => {
    const [type, setType] = React.useState();
    return (
        <ScrollView style={styles.container}>
            <Input placeholder="To'liq ism-familiya" />
            <Input placeholder="Telefon raqami" />
            <Input placeholder="Qo'shimcha telefon raqami" />
            <Input placeholder="Qaysi viloyatda tug'ilgansiz?" />

            <Text style={{ marginBottom: 14, color: "rgba(0, 0, 0, 0.3)" }}>
                Moliyaviy ta'minot turi
            </Text>

            <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="pick a size"
                onChange={(value) => setType(value)}
                style={{ marginBottom: 24 }}
            >
                <Stack
                    direction={{
                        base: "row",
                        md: "row",
                    }}
                    justifyContent="space-around"
                    alignItems="center"
                    space={10}
                    w="100%"
                    maxW="300px"
                >
                    <Radio
                        value="1"
                        colorScheme={colors.brandColor}
                        size="md"
                        my={1}
                    >
                        Rasmiy
                    </Radio>
                    <Radio
                        value="2"
                        colorScheme={colors.brandColor}
                        size="md"
                        my={1}
                    >
                        Norasmiy
                    </Radio>
                </Stack>
            </Radio.Group>

            <Input
                placeholder="Yordam olishga sabab(qisqa)"
                subTxt="Masalan: kasallik, boquvchisini yo'qotganlik kabi."
            />
            <Input placeholder="Siz olishni istagan summa miqdori (so'mda)" />

            <Text style={{ marginBottom: 14, color: "rgba(0, 0, 0, 0.3)" }}>
                Mablag'ni ishlab qaytarishga tayyormisiz?
            </Text>

            <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="pick a size"
                onChange={(value) => setType(value)}
                style={{ marginBottom: 24 }}
            >
                <Stack
                    direction={{
                        base: "row",
                        md: "row",
                    }}
                    justifyContent="space-around"
                    alignItems="center"
                    space={10}
                    w="100%"
                    maxW="300px"
                >
                    <Radio
                        value="1"
                        colorScheme={colors.brandColor}
                        size="md"
                        my={1}
                    >
                        Ha
                    </Radio>
                    <Radio
                        value="2"
                        colorScheme={colors.brandColor}
                        size="md"
                        my={1}
                    >
                        Yo'q
                    </Radio>
                </Stack>
            </Radio.Group>

            <Input placeholder="Qo'shimcha ma'lumotlar" icon />

            <View style={styles.inputWrapper}>
                <Ionicons
                    name="cloud-upload-outline"
                    size={24}
                    color="rgba(0, 0, 0, 0.3)"
                />
                <Text style={styles.input}>Passport nusxasini yuklang</Text>
            </View>

            <SendBtn text="Ro'yxatdan o'tish"/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        backgroundColor: "white",
    },
    inputWrapper: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
    },
    input: {
        height: 44,
        width: "100%",
        marginLeft: 10,
        fontSize: 17,
        color: "rgba(0, 0, 0, 0.3)",
    },
});
export default UserProfileScreen;
