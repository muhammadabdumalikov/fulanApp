import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
} from "react-native";
import { Radio, Stack } from "native-base";

import { Ionicons, Feather } from "@expo/vector-icons";
import Input from "../components/InputComponent";
import { colors } from "../constants/colors";
import SendBtn from "../components/SendBtn";
import MenuSVG from "../../assets/svg/Map";

const EditProfileScreen = ({ navigation }) => {
    const [type, setType] = useState();
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState();
    const [secondPhone, setSecondPhone] = useState();
    const [state, setState] = useState();
    const [text, setText] = useState();
    const [summ, setSumm] = useState();

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Input
                placeholder="To'liq ism-familiya"
                onChange={(value) => setFullName(value)}
                value={fullName}
            />
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

            <TouchableOpacity style={styles.inputWrapper}>
                <Ionicons
                    name="cloud-upload-outline"
                    size={24}
                    color="rgba(0, 0, 0, 0.3)"
                />
                <Text style={styles.input}>Passport nusxasini yuklang</Text>
            </TouchableOpacity>

            <SendBtn text="Ro'yxatdan o'tish" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: "white",
    },
    inputWrapper: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        marginBottom: 60,
    },
    input: {
        height: 44,
        width: "100%",
        marginLeft: 10,
        fontSize: 17,
        color: "rgba(0, 0, 0, 0.3)",
    },
});
export default EditProfileScreen;
