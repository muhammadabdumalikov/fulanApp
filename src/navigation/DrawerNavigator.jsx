
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserProfileScreen from "../screens/UserProfileScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;