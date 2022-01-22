import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { NativeBaseProvider, Text, Box } from "native-base";

import Routes from "./src/navigation/Routes";

const getFonts = () =>
    Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });

export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);

    if (fontsloaded) {
        return (
            <NativeBaseProvider>
                <Routes />
            </NativeBaseProvider>
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
