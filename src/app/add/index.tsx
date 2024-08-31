import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import { Loading } from "@/components/loading";

import { getCoinsMarketData } from "@/services/get-market";

export default function Add() {
    const [coinsMarket, setCoinsMarket] = useState<any>({})
    const [isGettingCoinsMarket, setIsGettingCoinsMarket] = useState(true)

    async function getCoinsMarket() {
        try {
            const coins = await getCoinsMarketData()
            setCoinsMarket(coins)
            setIsGettingCoinsMarket(false)
        } catch (error) {
            Alert.alert("Erro!", "Houve um erro ao carregar as moedas")
        }
    }
    
    useEffect(() => {
        getCoinsMarket()
    }, [])

    if (isGettingCoinsMarket) {
        return <Loading />
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Text>Add Coin</Text>
        </View>
    )
}