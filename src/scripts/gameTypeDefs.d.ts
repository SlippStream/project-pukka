export type Character = RawCharacter | GameCharacterData;

export interface RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
}

export interface GameCharacterData implements RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
    alignment: Alignment;
    notes: string;
    playerName: string;
}