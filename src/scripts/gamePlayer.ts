import { getCookie, setCookie } from "./cookies";
import type {GamePlayer as GamePlayerData, RawCharacter} from "./gameTypeDefs";
import {Team, Alignment} from "./gameEnums";

class GamePlayer implements GamePlayerData {
    character_id: string;
    alignment: Alignment;
    notes: string;
    playerName: string;
    constructor() {
        this.character_id = "NOCHARACTER";
        /* New Fields */
        this.notes = "";
        this.alignment = Alignment.GOOD;
        this.playerName = "Player";
    }
}
module GameApi {
    export class Game {
        players: GamePlayer[];
    
        constructor() {
            this.players = this.loadGameFromCookie();
        }
    
        loadGameFromCookie(): GamePlayer[] {
            const arr: GamePlayer[] = [];
            const game_s: string = getCookie("game");
    
            if (game_s == "") {
                return [];
            }
            const json: any[] = JSON.parse(game_s);
    
            for (let i = 0; i < json.length; i++) {
                arr.push(fromJsonObject(json[i]));
            }
            console.log(arr);
            return arr;
        }
    }

    export function fromJsonObject(raw: any): GamePlayerData {
        const gcd = new GamePlayer();

        gcd.character_id = raw.id ?? gcd.character_id;
        gcd.notes = raw?.notes ?? gcd.notes;
        gcd.alignment = raw?.alignment ?? gcd.alignment;
        gcd.playerName = raw?.playerName ?? gcd.playerName;
        return gcd;
    }
}

//TODO Write setCookie
const GameState = new GameApi.Game();
export default GameState;