import { View } from "react-native";
import { router } from "expo-router"
import { Header } from "@/components/header";
import { AddButton } from "@/components/add-button";

export default function Home() {
    return (
        <View className="flex-1 justify-center items-center">
            <Header />
            <AddButton onPress={() => router.push('/add')} />
        </View>
    )
}