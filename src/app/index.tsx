import { View, FlatList, Alert } from "react-native";
import { router } from "expo-router"

import { Header } from "@/components/header";
import { AddButton } from "@/components/add-button";
import { CoinCard } from "@/components/coin-card";

import { Coin } from "@/services/get-market";

import { useCoinStore } from "@/stores/coin-store";

export default function Home() {
    const { coins, remove } = useCoinStore()

    function handleCardDeletePress (coin: Coin) {
        Alert.alert(
            "Atenção!", 
            `Tem certeza que deseja remover ${coin.name}?`,
            [
                {text: "Não", onPress: () => {}, style: "cancel" },
                {text: "Sim", onPress: () => remove(coin.id) },
            ]
        )
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Header />

            <View className="flex-1 w-full p-3">
                <FlatList 
                    data={coins}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <CoinCard coin={item} onPress={() => handleCardDeletePress(item)}/>
                    )}
                />
            </View>

            <AddButton onPress={() => router.push('/add')} />
        </View>
    )
}