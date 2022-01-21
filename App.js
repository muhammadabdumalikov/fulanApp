import "react-native-gesture-handler"
import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import Routes from "./src/navigation/Routes";

export default function App() {
    // 2. Use at the root of your app
    return <Routes />;
}
