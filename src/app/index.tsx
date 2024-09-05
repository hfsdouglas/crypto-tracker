import { useEffect, useState } from "react";
import { View, FlatList, Alert, RefreshControl, Text } from "react-native";
import { router } from "expo-router"

import { Header } from "@/components/header";
import { AddButton } from "@/components/add-button";
import { CoinCard } from "@/components/coin-card";

import { Coin } from "@/services/get-market";
import { getCoins } from "@/services/get-coins";

import { useCoinStore } from "@/stores/coin-store";

export default function Home() {
    const { coins, remove } = useCoinStore()

    const [updatedCoins, setUpdatedCoins] = useState<Coin[]>([])

    const [refreshing, setRefreshing] = useState<boolean>(false)

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

    async function getUpdatedCoins() {
        try {
            const result = await getCoins(coins)
            setUpdatedCoins(result)
        } catch (error) {
            Alert.alert("Erro!", "Houve um erro ao carregar as moedas")
        } finally {
            setRefreshing(false)
        }
    }

    useEffect(() => {
        getUpdatedCoins()
    }, [coins])

    function handlePullListToRefresh() {
        setRefreshing(true);
        getUpdatedCoins()
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Header />

            {updatedCoins.length > 0 ? (
                <View className="flex-1 w-full p-3">
                    <FlatList 
                        data={updatedCoins}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <CoinCard coin={item} onPress={() => handleCardDeletePress(item)}/>
                        )}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={handlePullListToRefresh} />
                        }
                    />
                </View>
            ):(
                <View className="flex-1 justify-center p-3 mb-8">
                    <Text className="font-bold text-2xl text-center">Clique em + para adicionar uma moeda em sua carteira! 💰</Text>
                </View>
            )} 

            <AddButton onPress={() => router.push('/add')} />
        </View> 
    )
}