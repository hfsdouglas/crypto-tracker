import { Coin } from "@/services/get-market"
import { formatCurrency } from "@/utils/format-currency"
import { Image, Pressable, PressableProps, Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

type CoinCardProps = PressableProps & {
    coin: Coin
}

export function CoinCard({ coin, ...rest }: CoinCardProps) {
    
    return (
        <Pressable 
            className="bg-white flex-row h-32 border-b p-6 mb-3"
            {...rest}
        >
            <Image src={coin.image} alt="Coin Thumbnail" className="h-20 w-20 mr-6"/>
            
            <View className="flex-1 items-end">
                <Text className="text-lg font-extrabold">{coin.name.length > 24 ? coin.name.slice(0, 24).concat("...") : coin.name }</Text>
                <Text className="text-lg font-regular">{formatCurrency(coin.current_price)}</Text>
                <Text className={`text-lg font-regular ${coin.price_change_percentage_24h > 0 ? "text-lime-500" : "text-red-500"}`}>
                    {coin.price_change_percentage_24h > 0 ? <MaterialIcons name={"trending-up"} color={"#84cc16"} size={18}/> : <MaterialIcons name={"trending-down"} color={"#ef4444"} size={18}/>}&nbsp;  
                    {coin.price_change_percentage_24h} %
                </Text>
            </View>
        </Pressable>
    )
}