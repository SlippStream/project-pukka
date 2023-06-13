import { getCookie, setCookie } from "./cookies";
import type {GamePlayer as GamePlayerData, RawCharacter} from "./gameTypeDefs.d.ts";
import {Team, Alignment} from "./gameEnums";

class GamePlayer implements GamePlayerData {
    character: RawCharacter;
    alignment: Alignment;
    notes: string;
    playerName: string;
    constructor() {
        /* Inherited */
        this.character = {
            id: "",
            name: "",
            team: Team.TOWNSFOLK,
            ability: "",
            image: ""
        }

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

        gcd.character.id = raw.character.id;
        gcd.character.image = raw.character.image;
        gcd.character.name = raw.character.name;
        gcd.character.ability = raw.character.ability;
        gcd.character.team = raw.character.team;

        gcd.notes = raw?.notes ?? gcd.notes;
        gcd.alignment = raw?.alignment ?? gcd.alignment;
        gcd.playerName = raw?.playerName ?? gcd.playerName;
        return gcd;
    }
}

const GameState = new GameApi.Game();
export default GameState;