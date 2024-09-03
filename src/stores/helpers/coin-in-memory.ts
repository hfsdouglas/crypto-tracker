import { Coin } from "@/services/get-market";

export function add(coins: Coin[], newCoin: Coin) {
    return [...coins, newCoin]
}

export function remove(coins: Coin[], id: string) {
    return coins.filter(item => item.id !== id)
}