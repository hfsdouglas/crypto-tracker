import { useEffect, useState } from "react";
import { Alert, FlatList, Keyboard, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Loading } from "@/components/loading";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { CoinCard } from "@/components/coin-card";

import { Coin, getCoinsMarketData } from "@/services/get-market";

import { useCoinStore } from "@/stores/coin-store";

export default function Add() {
    const [coinsMarket, setCoinsMarket] = useState<Coin[]>([])
    const [isGettingCoinsMarket, setIsGettingCoinsMarket] = useState(true)
    const [search, setSearch] = useState('')

    function handleSearchButton() {
        Keyboard.dismiss()

        let searchCoins: Coin[] = []

        coinsMarket.map(item => {
            const name = item.name.toLocaleLowerCase()
            const searchString = search.toLocaleLowerCase()

            if (name.match(searchString)) {
                searchCoins.push(item)
            }
        })

        setCoinsMarket(searchCoins)
    }

    useEffect(() => {
        if (search.length === 0) {
            getCoinsMarket()
        }
    }, [search])

    const { coins, add } = useCoinStore()

    function handleCoinCardPress(coin: Coin) {
        const existingCoin = coins.filter(item => item.id === coin.id)

        if (existingCoin.length > 0) {
            return Alert.alert("Atenção!", "Esta moeda já está adicionada!")
        }

        router.back()

        return add(coin)
    }

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
                <Input value={search} onChangeText={setSearch} onKeyPress={(event) => {
                    if (event.nativeEvent.key === 'Enter') {
                        handleSearchButton()
                    }
                }} />
                <Button className="ml-3" onPress={handleSearchButton}>
                    <MaterialIcons name="search" color="#FFFFFF" size={26} />
                </Button>
            </View>

            <FlatList 
                data={coinsMarket}
                keyExtractor={item  => item.id} 
                renderItem={
                    ({item}) => (<CoinCard coin={item} onPress={() => handleCoinCardPress(item)}/>)
                } 
            />
        </View>
    )
}