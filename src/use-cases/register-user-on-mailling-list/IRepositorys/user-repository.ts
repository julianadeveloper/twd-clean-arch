import { UserData } from "../user-data";

export interface IUserRepisotory{
  add(user: UserData): Promise<void>
  findUserByEmail(email: string): Promise<UserData>
  findAllUsers(): Promise<UserData[]>
}
