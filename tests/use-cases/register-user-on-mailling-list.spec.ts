import { UserData } from "../../src/use-cases/register-user-on-mailling-list/user-data";

describe('Register user on mailing list use case', () => {
  it('Should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRespository(users);
    const useCase: RegisterUSeOnMailingList = new RegisterUserOnMailingList(repo);

    const name = 'any_name'
    const email = 'any@email.com'
    const response = await useCase.RegisterUserOnMailingList({name, email})
    const user  = repo.findUserByEmail(email)
    expect((await user.name)).toBe('any_name')
  })
})
