import React from "react";
import { View, Text } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
                <View
                    style={{
                        borderTopWidth: 1,
                        borderColor: "#ccc",
                        marginVertical: 20,
                        marginHorizontal: 16,
                    }}
                />
                <Text
                    style={{ marginLeft: 16, marginBottom: 10, fontSize: 17 }}
                >
                    Bog'lanish:
                </Text>
                <Text
                    style={{ marginLeft: 16, fontSize: 19 }}
                >
                    +998910000000
                </Text>
            </DrawerContentScrollView>
            <View>
                <Text>Custom text</Text>
            </View>
        </View>
    );
};

export default CustomDrawer;
