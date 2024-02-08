export interface Game{
    id: number
    name: string
    widthNeeded: number
    heightNeeded: number
    minPlayers: number
    maxPlayers: number
    reserved: boolean
}