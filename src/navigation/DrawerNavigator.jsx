import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import UserProfileScreen from "../screens/UserProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";
import { colors } from "../constants/colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 17,
                    color: "black",
                },
                // drawerActiveBackgroundColor: "white",
                // drawerInactiveTintColor: colors.brandColor,
                // drawerActiveTintColor: "white"
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="md-person-outline"
                            size={26}
                            color="black"
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{
                    drawerIcon: () => (
                        <Ionicons
                            name="md-information-circle-outline"
                            size={26}
                            color="black"
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;