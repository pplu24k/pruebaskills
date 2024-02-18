export class Booking {
    id: number;
    user: string;
    startIn: string;
    endIn: string;

    constructor(id: number, user: string, startIn: string, endIn: string) {
        this.id = id;
        this.user = user;
        this.startIn = startIn;
        this.endIn = endIn;
    }
}
