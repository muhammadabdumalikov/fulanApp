import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Animated,
    StatusBar,
    Platform,
} from "react-native";
import { PresenceTransition, Box, Card } from "native-base";

import {
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";

import { colors } from "../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import CardComponent from "../components/CardComponent";
import MenuSVG from "../../assets/svg/Map";

const data = [
    {
        id: "1",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
    {
        id: "2",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
    {
        id: "3",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
    {
        id: "4",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
    {
        id: "5",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
    {
        id: "6",
        firstName: "Jaloliddin",
        lastName: "Esonboev",
        type: "Rasmiy",
        bDate: "12.03.1999",
        summ: "15000000",
    },
];

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const HomeScreen = ({ navigation }) => {
    const [isAboutProjectOpen, setIsAboutProjectOpen] = React.useState(true);
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const y = new Animated.Value(0);
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y } } }],
        {
            useNativeDriver: true,
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://fulan.pixer.uz/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                let jsonData = await data.json();

                setData(jsonData.data);
                // setData(jsonData);
                // navigation.setOptions({
                //     title: `ID: @${client.clients[0].clientId}`,
                // });

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        backgroundColor: "white",
                    }}
                >
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            {/* <Feather name="menu" size={26} color="black" /> */}
                            <MenuSVG />
                        </TouchableOpacity>
                        <Text style={styles.headerTxt}>Fulan</Text>
                        <TouchableOpacity
                            style={styles.profile}
                            onPress={() =>
                                navigation.navigate("EditProfileScreen")
                            }
                        >
                            <Feather name="user" size={26} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* //Search input ------------------------------------------------ */}
                    <View style={styles.searchBox}>
                        <Feather
                            style={styles.searchIco}
                            name="search"
                            size={22}
                            color="gray"
                        />
                        <TextInput
                            style={styles.searchTxt}
                            placeholder="Qidirish"
                        />
                    </View>

                    {/* About Project Box --------------------------------------------- */}
                    <PresenceTransition
                        visible={isAboutProjectOpen}
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 250,
                            },
                        }}
                    >
                        <Box
                            w="100%"
                            h="160"
                            mt="7"
                            bg="#F9F9F9"
                            rounded="lg"
                            p="16px"
                        >
                            <View style={styles.about}>
                                <View style={styles.about}>
                                    <MaterialCommunityIcons
                                        name="lightning-bolt"
                                        size={30}
                                        color={colors.brandColor}
                                    />
                                    <Text
                                        style={{
                                            color: colors.brandColor,
                                            fontSize: 20,
                                            fontWeight: "600",
                                            marginLeft: 10,
                                        }}
                                    >
                                        Loyiha haqida
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setIsAboutProjectOpen(false)}
                                >
                                    <MaterialIcons
                                        name="cancel"
                                        size={24}
                                        color="#8E8E93"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.aboutTxt}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Fulan
                                </Text>{" "}
                                - loyihasi orqali siz: moliyaviy yordamga muhtoj
                                bo'lgan yoshlarga moddiy yordam berishingiz
                                mumkin. Ta'minotchi inson sifatida siz - ushbu
                                yoshlar bilan bog'lanib... Fulan - loyihasi
                                orqali siz: moliyaviy yordamga muhtoj bo'lgan
                                yoshlarga moddiy yordam berishingiz mumkin.
                                Ta'minotchi inson sifatida siz - ushbu yoshlar
                                bilan bog'lanib...
                            </Text>
                        </Box>
                    </PresenceTransition>

                    {/* Main Screen ------------------------------------------------- */}
                    <Text style={styles.infoTxt}>
                        Yordam olishni xohlovchi yoshlar ro'yxati
                    </Text>

                    {data.length > 1 ? (
                        <View>
                            <Text>Empty</Text>
                        </View>
                    ) : (
                        <AnimatedFlatlist
                            scrollEventThrottle={16}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            data={data}
                            key={(item) => item.id}
                            renderItem={({ index, item }) => (
                                <CardComponent {...{ index, item, y }} />
                            )}
                            {...{ onScroll }}
                        />
                    )}

                    {/* <TouchableOpacity onPress={() => setIsAboutProjectOpen(true)}>
                <Text>Ok</Text>
            </TouchableOpacity> */}
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Platform.OS == "android" ? 50 : 0,
    },
    headerTxt: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "500",
    },
    profile: {
        backgroundColor: colors.gray,
        padding: 6,
        borderRadius: 19,
    },
    searchBox: {
        width: "100%",
        height: 36,
        backgroundColor: colors.gray,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginTop: 17,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIco: {
        width: "10%",
    },
    searchTxt: {
        width: "80%",
        fontSize: 17,
    },
    about: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    aboutTxt: {
        overflow: "hidden",
        padding: 5,
        fontSize: 15,
        height: "80%",
    },
    infoTxt: {
        fontSize: 15,
        fontWeight: "400",
        color: "gray",
        marginTop: 20,
        marginBottom: 10,
    },
});

export default HomeScreen;
