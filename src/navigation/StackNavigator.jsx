import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

import OnBoardingScreen from "../screens/OnBoardingScreens";
import DrawerNavigator from "./DrawerNavigator";
import ToggleDrawer from "../components/toggleDrawer";

const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation}) => {
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
        <Stack.Navigator
            screenOptions={{
                // headerShown: false,
                headerStyle: {
                    backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            {/* {isAppFirstLaunched && (
            <Stack.Screen
                name="OnBoardingScreen"
                component={OnBoardingScreen}
            />
        )} */}
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="OnBoardingScreen"
                component={OnBoardingScreen}
            />

            <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{
                    headerLeft: () => <ToggleDrawer />,
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
