import { getCookie, setCookie } from "./cookies";

enum Team {
    TOWNSFOLK = "townsfolk",
    OUTSIDER = "outsider",
    MINION = "minion",
    DEMON = "demon",
    TRAVELLER = "traveller"
}

enum Alignment {
    GOOD = "good",
    EVIL = "evil"
}

interface RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
}

class GameCharacterData implements RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
    alignment: Alignment;
    notes: string;
    
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
    }

    static fromRawCharacter(raw: RawCharacter): GameCharacterData {
        const gcd = new GameCharacterData();
        gcd.id = raw.id;
        gcd.image = raw.image;
        gcd.name = raw.name;
        gcd.ability = raw.ability;
        gcd.team = raw.team;
        return gcd;
    }
}

type Character = RawCharacter | GameCharacterData;

function loadGameFromCookie(): GameCharacterData[] {
    const game_s: string = getCookie("game");
    if (game_s == "") {
        return [];
    }
    const json = JSON.parse(game_s);
    console.log(json);
    return json;
}

let game = [];
setCookie("game", '[{"id": "washerwoman","image": "./assets/icons/characters/washerwoman.png","name": "Washerwoman","team": "townsfolk","ability": "You start knowing that 1 of 2 players is a particular Townsfolk.", "notes": "hello", "alignment": "good"}]', 7);
game = loadGameFromCookie();