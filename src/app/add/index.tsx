import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Loading } from "@/components/loading";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { CoinCard } from "@/components/coin-card";

import { Coin, getCoinsMarketData } from "@/services/get-market";

export default function Add() {
    const [coinsMarket, setCoinsMarket] = useState<Coin[]>([])
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
        <View className="flex-1 p-3">
            <View className="flex-row mb-3">
                <Input />
                <Button className="ml-3">
                    <MaterialIcons name="search" color="#FFFFFF" size={26} />
                </Button>
            </View>

            <FlatList 
                data={coinsMarket}
                keyExtractor={item  => item.id} 
                renderItem={
                    ({item}) => (<CoinCard coin={item} />)
                } 
            />
        </View>
    )
}