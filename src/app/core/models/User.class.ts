export class User{

    constructor(email: string, role: string) {
        this.email = email;
        this.role = role;
    }

    email:string;
    role: string;

    isAdmin(): boolean{
        if(this.role === "admin"){
            return true
        }
        return false
        
    }


}