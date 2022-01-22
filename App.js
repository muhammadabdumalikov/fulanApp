import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { NativeBaseProvider, Text, Box } from "native-base";

import Routes from "./src/navigation/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StatusBar as NativeStatusBar } from "react-native";

const getFonts = () =>
    Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });

export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);

    if (fontsloaded) {
        return (
            <SafeAreaView style={{
                flex: 1,
                // marginTop: Platform.OS == "android" ? 0 : NativeStatusBar.currentHeight
            }} >
                <StatusBar style="auto" />
                <NativeBaseProvider>
                    <Routes />
                </NativeBaseProvider>
            </SafeAreaView>
        );
    } else {
        return (
            <Apploading
                startAsync={getFonts}
                onFinish={() => {
                    setFontsLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }
}
