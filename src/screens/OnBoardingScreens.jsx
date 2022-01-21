import { SafeAreaView, Text, View } from "react-native";

const slides = [
    {
        id: 1,
        image: require("../../assets/onBoarding/Map.png"),
        tittle: "Map",
    },
    {
        id: 2,
        image: require("../../assets/onBoarding/Gym.png"),
        tittle: "Gym",
    },
    {
        id: 3,
        image: require("../../assets/onBoarding/Programing.png"),
        tittle: "Programming",
    },
];

function OnBoardingScreen() {
    return <SafeAreaView></SafeAreaView>;
}

export default OnBoardingScreen;
