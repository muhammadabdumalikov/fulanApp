import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import MapSvg from "../../assets/svg/Map";
import { colors } from "../constants/colors";

const { height, width } = Dimensions.get("window");

const slides = [
    {
        id: "1",
        image: require("../../assets/onBoarding/Map.png"),
        tittle: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
    },
    {
        id: "2",
        image: require("../../assets/onBoarding/Gym.png"),
        tittle: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
    },
    {
        id: "3",
        image: require("../../assets/onBoarding/Programing.png"),
        tittle: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
    },
];

const Slide = ({ item }) => {
    return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.tittle}</Text>
        </View>
    );
};

const OnBoardingScreen = ({ navigation }) => {
    const [currendSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const Footer = () => {
        return (
            <View style={styles.footer}>
                <View style={styles.line}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currendSlideIndex == index && {
                                    backgroundColor: "black",
                                    width: 25,
                                },
                            ]}
                        ></View>
                    ))}
                </View>
                <View style={styles.btnsWrapper}>
                    {currendSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={[styles.btn]}
                                onPress={() =>
                                    navigation.navigate("HomeScreen")
                                }
                            >
                                <Text style={styles.btnTxt}>Get started</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={[
                                    styles.btn,
                                    {
                                        backgroundColor: "transparent",
                                        borderWidth: 1,
                                        borderColor: colors.brandColor,
                                    },
                                ]}
                                onPress={skip}
                            >
                                <Text
                                    style={
                                        ([styles.btnTxt],
                                        {
                                            color: colors.brandColor,
                                            fontWeight: "bold",
                                        })
                                    }
                                >
                                    SKIP
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }}></View>
                            <TouchableOpacity style={[styles.btn]}>
                                <Text
                                    style={styles.btnTxt}
                                    onPress={goNextSlide}
                                >
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    const updateScrollIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currenIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currenIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currendSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastIndex = slides.length - 1;
        const offset = lastIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastIndex);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="blue" />
            <FlatList
                data={slides}
                ref={ref}
                contentContainerStyle={styles.content}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => <Slide item={item} />}
                onMomentumScrollEnd={updateScrollIndex}
                pagingEnabled
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        height: "75%",
    },
    slide: {
        flex: 1,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "60%",
        borderColor: "black",
        resizeMode: "cover",
    },
    title: {
        fontSize: 17,
        textAlign: "center",
        maxWidth: "70%",
        lineHeight: 23,
    },
    footer: {
        height: height * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    line: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: "#E5E5E5",
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btnsWrapper: {
        marginBottom: 40,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.brandColor,
        alignItems: "center",
        justifyContent: "center",
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
});

export default OnBoardingScreen;
