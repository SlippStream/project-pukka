export interface RawCharacter {
    id: string;
    image: string;
    name: string;
    team: Team;
    ability: string;
}

export interface GamePlayer implements RawCharacter {
    character: RawCharacter;
    alignment: Alignment;
    notes: string;
    playerName: string;
}