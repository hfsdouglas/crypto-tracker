import { StatusBar, View } from "react-native"
import { Slot } from "expo-router"
import "../styles/global.css"

export default function Layout() {
    return (
        <View className="flex-1">
            <StatusBar barStyle="light-content" />
            <Slot />
        </View>
    )
}