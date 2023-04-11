import { User } from "@core/models/User";
import { UserRepository } from "@core/repository/UserRepository";

export class FakeUserController implements UserRepository {

    private fakeDataBase: Array<User> = []

    save(user: User): void {
        throw new Error('Not implemented yet')
    }

}