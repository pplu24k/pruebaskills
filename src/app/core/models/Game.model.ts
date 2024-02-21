export class Game {
    id: number;
    name: string;
    widthNeeded: number;
    heightNeeded: number;
    minPlayers: number;
    maxPlayers: number;
    reserved: boolean;
  
    constructor(
      id: number,
      name: string,
      widthNeeded: number,
      heightNeeded: number,
      minPlayers: number,
      maxPlayers: number,
      reserved: boolean
    ) {
      this.id = id;
      this.name = name;
      this.widthNeeded = widthNeeded;
      this.heightNeeded = heightNeeded;
      this.minPlayers = minPlayers;
      this.maxPlayers = maxPlayers;
      this.reserved = reserved;
    }
  }
  