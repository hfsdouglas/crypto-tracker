import { TextInput, View } from "react-native";

export function Input() {
    return (
        <View className="border-2 border-blue-950 flex-1 rounded-md">
            <TextInput className="text-lg px-4 py-2 text-blue-950" placeholder="Digite a criptomoeda" />
        </View>
    )
}