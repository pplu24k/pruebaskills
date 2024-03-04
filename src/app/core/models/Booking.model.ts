import { User } from "./User.model";

export class Booking {
    id: number;
    user: User |null;
    startIn: string;
    endIn: string;

    constructor(id: number, user: User | null, startIn: string, endIn: string) {
        this.id = id;
        this.user = user;
        this.startIn = startIn;
        this.endIn = endIn;
    }
}
