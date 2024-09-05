import { Text, View } from "react-native";

export function Header() {
    return (
        <View className="flex-row bg-blue-950 h-32 w-full pt-16 px-5 pb-5 justify-between items-center">
            <Text className="text-2xl font-extrabold text-white">Crypto Tracker</Text>
        </View>
    )
}