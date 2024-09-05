import { View, StatusBar } from "react-native"
import { Slot } from "expo-router"
import "../styles/global.css"

export default function Layout() {
    return (
        <View className="flex-1 bg-slate-200">
            <StatusBar barStyle="light-content" translucent />
            <Slot />
        </View>
    )
}