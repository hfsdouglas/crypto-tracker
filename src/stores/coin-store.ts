import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Coin } from "@/services/get-market";

import * as coinInMemory from "@/stores/helpers/coin-in-memory";

type StateProps = {
    coins: Coin[],
    add: (coin: Coin) => void,
    remove: (id: string) => void
}

export const useCoinStore = create(persist<StateProps>((set) => ({
    coins: [],
    add: (coin: Coin) => set((state) => ({
        coins: coinInMemory.add(state.coins, coin)
    })),
    remove: (id: string) => set((state) => ({
        coins: coinInMemory.remove(state.coins, id)
    }))
}), {
    name: "crypto-tracker:store",
    storage: createJSONStorage(() => AsyncStorage)
}))