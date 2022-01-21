import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnBoardingScreen from "../screens/OnBoardingScreens";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

    useEffect(() => {
        async function run() {
            await AsyncStorage.removeItem("isAppFirstLaunched");

            const appData = await AsyncStorage.getItem("isAppFirstLaunched");
            if (appData == null) {
                setIsAppFirstLaunched(true);
                await AsyncStorage.setItem("isAppFirstLaunched", "false");
            } else {
                setIsAppFirstLaunched(false);
            }
        }
        run();
    }, []);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* {isAppFirstLaunched && (
            <Stack.Screen
                name="OnBoardingScreen"
                component={OnBoardingScreen}
            />
        )} */}
            <Stack.Screen
                name="OnBoardingScreen"
                component={OnBoardingScreen}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
