import state from "./gamePlayer";
import type { GamePlayer } from "./gameTypeDefs";

export const getPlayers = function(): GamePlayer[] {
    return state.players;
}

