import { Coin } from "@/services/get-market"
import { Image, Pressable, PressableProps, Text, View } from "react-native"

type CoinCardProps = PressableProps & {
    coin: Coin
}

export function CoinCard({ coin, ...rest }: CoinCardProps) {
    return (
        <Pressable 
            className="bg-slate-50 flex-row h-32 border-b p-6 mb-3"
            {...rest}
        >
            <Image src={coin.image} alt="Coin Thumbnail" className="h-20 w-20 mr-6"/>
            
            <View className="flex-1 items-end">
                <Text className="text-lg font-extrabold">{coin.name.length > 24 ? coin.name.slice(0, 24).concat("...") : coin.name }</Text>
                <Text className="text-lg font-extrabold">{coin.current_price}</Text>
                <Text className="text-lg font-extrabold">{coin.id}</Text>
            </View>
        </Pressable>
    )
}