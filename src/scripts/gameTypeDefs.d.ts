export interface RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
}

export interface GamePlayer {
    character_id: string;
    alignment: Alignment;
    notes: string;
    playerName: string;
}