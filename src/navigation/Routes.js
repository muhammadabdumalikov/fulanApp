import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";

// import AsyncStorage from "@react-native-async-storage/async-storage";

export default Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};
