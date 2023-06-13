import state from "./playerGame";
import type { GamePlayer } from "./gameTypeDefs";

export const getPlayers = function(): GamePlayer[] {
    return state.players;
}

