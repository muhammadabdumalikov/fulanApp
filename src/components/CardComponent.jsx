import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const CardHeight = 170 + 10 * 2;
const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 64;

const CardComponent = ({ index, item, y }) => {
    const position = Animated.subtract(index * CardHeight, y);
    const isDisappering = -CardHeight;
    const isTop = 0;
    const isBottom = height - CardHeight;
    const isAppearing = height;
    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.0001 + index * CardHeight],
                outputRange: [0, -index * CardHeight],
                extrapolateRight: "clamp",
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CardHeight / 4],
            extrapolate: "clamp",
        })
    );
    const scale = position.interpolate({
        inputRange: [isDisappering, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    });
    const opacity = position.interpolate({
        inputRange: [isDisappering, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
    });

    return (
        <Animated.View
            style={[
                // styles.box,
                { opacity, transform: [{ translateY }, { scale }] },
            ]}
            key={index}
        >
            <Pressable style={styles.box}>
                <View style={styles.nameLine}>
                    <Feather name="user" size={26} color={colors.brandColor} />
                    <Text
                        style={styles.nameTxt}
                    >{`${item.firstName} ${item.lastName}`}</Text>
                </View>

                <View style={styles.secondLine}>
                    <View>
                        <Text style={styles.preTxt}>Tug'ilgan yili</Text>
                        <Text
                            style={styles.secondLineTxt}
                        >{`${item.bDate}`}</Text>
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
                        <Text
                            style={styles.secondLineTxt}
                        >{`${item.type}`}</Text>
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
            </Pressable>
        </Animated.View>
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
