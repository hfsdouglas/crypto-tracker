import { router, Stack } from "expo-router";
import { Platform, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerTitle: "Nova Moeda",
                headerStyle: {
                    backgroundColor: "#172554",
                },
                headerTitleStyle: {
                    color: "#f8fafc",
                },
                headerLeft: () => <Pressable onPress={() => router.back()} className="pr-3"><MaterialIcons name="arrow-back" color="#FFF" size={24}/></Pressable>,
            }}
        >
            <Stack.Screen name="index"/>
        </Stack>
    )
}