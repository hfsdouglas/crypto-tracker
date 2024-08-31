import { api } from "@/lib/api"

export type Coin = {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number
}

async function getCoinsMarket() {
    const response = await api.get('/coins/markets?vs_currency=usd&per_page=50')
    return response
}

async function getCoinsMarketData() {
    const { data } = await getCoinsMarket()
    const fields = ['id', 'name', 'symbol', 'image', 'current_price', 'price_change_percentage_24h']
    let coinsData: Coin[] = []

    data.map((coin: any) => {
        let coinData:any = {}

        for (const field in coin) {
            if (fields.includes(field)) {
                coinData[field] = coin[field]
            }
        }

        coinsData.push(coinData)
    })

    return coinsData
}

export { getCoinsMarketData }

