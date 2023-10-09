import { UserData } from "../user-data"
import { InMemoryUserRepository } from "./in-memory-user-repository"

describe('In memory User repository', () => {
  it('should return null if not found user', async() => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@mail.com')

    expect(user).toBeNull()
  })
})
