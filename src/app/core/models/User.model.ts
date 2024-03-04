import { Token } from "@angular/compiler";

export type UserDTO = {
  email: string;
  isAdmin: boolean;
  token: string
};
export class User {
  constructor(
    
    public readonly email: string,
    public readonly isAdmin: boolean,
    public readonly token : string
  ) {}

  public toDTO(): UserDTO {
    return { email: this.email, isAdmin: this.isAdmin, token: this.token };
  }

  public static fromDTO(dto: UserDTO): User {
    return new User(dto.email, dto.isAdmin, dto.token);
  }
}
