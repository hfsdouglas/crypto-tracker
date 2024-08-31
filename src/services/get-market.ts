import { api } from "@/lib/api"


async function getCoinsMarketData() {
    try {
        const response = await api.get('/coins/markets?vs_currency=usd&per_page=50')
        return response
    } catch (error) {
        throw error
    }
}

export { getCoinsMarketData }