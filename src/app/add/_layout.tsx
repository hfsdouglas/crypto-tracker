import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerTitle: "Nova Moeda",
                headerStyle: {
                    backgroundColor: "#172554",
                },
                headerTitleStyle: {
                    color: "#f8fafc"
                }
            }}
        >
            <Stack.Screen name="index"/>
        </Stack>
    )
}