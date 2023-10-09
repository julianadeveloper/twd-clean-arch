import { IUserRepisotory } from "../IRepositorys/user-repository";
import { UserData } from "../user-data";

export class InMemoryUserRepository implements IUserRepisotory {
  private repository: UserData[]
  constructor(repository: UserData[]){
    this.repository = repository
  }

  add(userRepository: UserData): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findUserByEmail(email: string): Promise<UserData> {
    return null
  }
  findAllUsers(): Promise<UserData[]> {
    throw new Error("Method not implemented.");
  }
}
