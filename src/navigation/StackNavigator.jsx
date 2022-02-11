import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

import OnBoardingScreen from "../screens/OnBoardingScreens";
import DrawerNavigator from "./DrawerNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/Register";
import EditProfileScreen from "../screens/EditProfileScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import EnterOTPScreen from "../screens/EnterOTPScren";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation }) => {
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
        // screenOptions={}
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
                options={{
                    headerShown: false,
                }}
                name="HomeScreen"
                component={DrawerNavigator}
            />
            <Stack.Screen
                options={{
                    title: "Profil",
                }}
                name="ProfileScreen"
                component={ProfileScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="EnterOTPScreen"
                component={EnterOTPScreen}
            />
            <Stack.Screen
                options={{
                    title: "Ro'yxatdan o'tish",
                }}
                name="EditProfileScreen"
                component={EditProfileScreen}
            />
            <Stack.Screen
                options={{
                    title: "Ilova haqida",
                }}
                name="AboutUsScreen"
                component={AboutUsScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
