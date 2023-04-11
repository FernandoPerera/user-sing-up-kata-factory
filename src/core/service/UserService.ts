import { User } from "@core/models/User";
import { UserRepository } from "@core/repository/UserRepository";

export class UserService {

    private userRepository: UserRepository

    constructor( userRepository: UserRepository ) {
        this.userRepository = userRepository
    }

    save( user: User ): void {
        this.userRepository.save(user)
    }

}
