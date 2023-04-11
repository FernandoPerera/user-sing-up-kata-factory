import { User } from "@core/models/User";

export interface UserRepository {

    save(user: User): void

    userExist(user: User): boolean

}