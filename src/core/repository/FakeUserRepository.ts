import { User } from "@core/models/User";
import { UserRepository } from "@core/repository/UserRepository";

export class FakeUserRepository implements UserRepository {

    private fakeDataBase: Array<User> = []

    save(user: User): void {
        this.fakeDataBase.push(user)
    }

    userExist(user: User): boolean {
        
        return this.fakeDataBase.some( 
            (actualUser) => user.getEmail() === actualUser.getEmail() 
        )

    }

}