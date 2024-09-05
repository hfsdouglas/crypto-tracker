import { api } from "@/lib/api";
import { Coin } from "./get-market";

/**
 * @returns an object of Coin
 * @param value expects the id of the coin
 */
export async function getCoin(value: string): Promise<Coin> {
    const { data } = await api.get(`/coins/${value}`);
    
    let { id, name, symbol, image, market_data } = data
    
    let current_price = market_data.current_price.usd
    let price_change_percentage_24h = market_data.price_change_percentage_24h
    image = image.large
    
    return { id, name, symbol, image, current_price, price_change_percentage_24h }
}