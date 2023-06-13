import { getCookie, setCookie } from "./cookies";
import type {Character, GameCharacterData} from "./gameTypeDefs.d.ts";
import {Team, Alignment} from "./gameEnums";

class GameCharacter implements GameCharacterData {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
    alignment: Alignment;
    notes: string;
    playerName: string;
    constructor() {
        /* Inherited */
        this.id = "";
        this.image = "";
        this.name = "";
        this.ability = "";
        this.team = Team.TOWNSFOLK;

        /* New Fields */
        this.notes = "";
        this.alignment = Alignment.GOOD;
        this.playerName = "Player";
    }
}
module GameApi {
    export class Game {
        players: GameCharacterData[];
    
        constructor() {
            this.players = this.loadGameFromCookie();
        }
    
        loadGameFromCookie(): GameCharacterData[] {
            const arr: GameCharacterData[] = [];
            const game_s: string = getCookie("game");
    
            if (game_s == "") {
                return [];
            }
            const json: any[] = JSON.parse(game_s);
    
            for (let i = 0; i < json.length; i++) {
                arr.push(fromRawCharacter(json[i]));
            }
            console.log(arr);
            return arr;
        }
    }

    export function fromRawCharacter(raw: Character | any): GameCharacterData {
        const gcd = new GameCharacter();
        gcd.id = raw.id;
        gcd.image = raw.image;
        gcd.name = raw.name;
        gcd.ability = raw.ability;
        gcd.team = raw.team;

        gcd.notes = raw?.notes ?? gcd.notes;
        gcd.alignment = raw?.alignment ?? gcd.alignment;
        gcd.playerName = raw?.playerName ?? gcd.playerName;
        return gcd;
    }
}

const GameState = new GameApi.Game();
export default GameState;