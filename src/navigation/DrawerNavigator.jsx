import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import UserProfileScreen from "../screens/UserProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";
import { colors } from "../constants/colors";
import { TouchableOpacity } from "react-native";
import AboutUsScreen from "../screens/AboutUsScreen";
import MenuSVG from "../../assets/svg/Map";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation: StackNavigation }) => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
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
                    title: "Asosiy",
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="ios-home-outline"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Mening profilim",
                    drawerIcon: () => (
                        <Ionicons
                            name="md-person-outline"
                            size={26}
                            color="black"
                        />
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={{ marginLeft: 20 }}
                        >
                            <MenuSVG />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Drawer.Screen
                name="AboutUs"
                component={AboutUsScreen}
                options={({navigation}) => ({
                    title: "Ilova haqida",
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="md-information-circle-outline"
                            size={26}
                            color="black"
                        />
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={{ marginLeft: 20 }}
                        >
                            <MenuSVG />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
