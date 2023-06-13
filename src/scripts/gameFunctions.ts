import state from "./playerGame";
import type { GameCharacterData } from "./gameTypeDefs";

export const getPlayers = function(): GameCharacterData[] {
    return state.players;
}

