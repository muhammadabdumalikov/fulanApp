import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnBoardingScreen from "../screens/OnBoardingScreens";
import HomeScreen from "../screens/HomeScreen";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default Routes = () => {
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
        <NavigationContainer>
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
        </NavigationContainer>
    );
};
