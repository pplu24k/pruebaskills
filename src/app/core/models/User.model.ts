export type UserDTO = {
  email: string;
  isAdmin: boolean;
};
export class User {
  constructor(
    public readonly email: string,
    public readonly isAdmin: boolean
  ) {}

  public toDTO(): UserDTO {
    return { email: this.email, isAdmin: this.isAdmin };
  }

  public static fromDTO(dto: UserDTO): User {
    return new User(dto.email, dto.isAdmin);
  }
}
