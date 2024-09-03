import { View, FlatList } from "react-native";
import { router } from "expo-router"
import { Header } from "@/components/header";
import { AddButton } from "@/components/add-button";
import { useCoinStore } from "@/stores/coin-store";
import { CoinCard } from "@/components/coin-card";

export default function Home() {
    const { coins, remove } = useCoinStore()

    return (
        <View className="flex-1 justify-center items-center">
            <Header />

            <View className="flex-1 w-full p-3">
                <FlatList 
                    data={coins}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <CoinCard coin={item} />
                    )}
                />
            </View>

            <AddButton onPress={() => router.push('/add')} />
        </View>
    )
}