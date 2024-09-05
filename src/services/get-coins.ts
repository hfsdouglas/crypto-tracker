import { getCoin } from "./get-coin";
import { Coin } from "./get-market";

async function getCoinById(id: string) {
    const response = await getCoin(id)
    return response
}

/**
 * @returns an array of coins updated
 * @param value expects an array of coins
 */
export async function getCoins(coins: Coin[]): Promise<Coin[]> {
    const updatedCoins = await Promise.all(
        coins.map(async (coin) => {
            const updatedCoin = await getCoinById(coin.id);
            return updatedCoin
        })
    )

    return updatedCoins
}