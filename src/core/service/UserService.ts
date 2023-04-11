import { User } from "@core/models/User";
import { UserRepository } from "@core/repository/UserRepository";

export class UserService {

    private userRepository: UserRepository

    constructor( userRepository: UserRepository ) {
        this.userRepository = userRepository
    }

    save( user: User ): void {

        const userDontExist = !this.userExist(user)

        if (userDontExist) {
            this.userRepository.save(user)            
        }

    }

    userExist(user : User) : boolean {
        return this.userRepository.userExist(user)
    }

}
