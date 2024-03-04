import { singInFormData } from "../../../components/logup/logup.component";

export class SingInRequestModel {
    email: string;
    name: string;
    password: string;

    constructor(email: string, name: string, password: string) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public static fromSignInForm(formObjet: singInFormData): SingInRequestModel {
        return new SingInRequestModel(formObjet.email,formObjet.fullName,formObjet.password1);
      }

    toDTO(): any {
        return {
            email: this.email,
            name: this.name,
            password: this.password
        };
    }
}