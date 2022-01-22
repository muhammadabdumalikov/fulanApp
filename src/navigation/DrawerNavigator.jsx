import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserProfileScreen from "../screens/UserProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
