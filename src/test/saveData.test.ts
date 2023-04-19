
import { UserService } from '../core/service/UserService'
import { User } from '../core/models/User'
import { Email } from '../core/models/Email'
import { Name } from '../core/models/Name'
import { Age } from '../core/models/Age'
import { UserRepository } from '../core/repository/UserRepository';

/*
 *  - if user is correct                ->      add into database
 *  - if user exist in the database     ->      dont add into database
*/

describe('sing-up user test', () => {
    
    const name: Name = Name.createNewName('Fernando')
    const age: Age = Age.createNewAge(20)
    const email: Email = Email.createNewEmail('example@gmail.com')
    const user: User = new User(name, age, email)

    it('if user is correct insert into the database', () => {

        const myFakeUserRepository: UserRepository = {
            save: jest.fn(),
            userExist: () => false
        }

        const myUserService = new UserService(myFakeUserRepository)
        const saveSpy = jest.spyOn(myFakeUserRepository, 'save')

        myUserService.save(user)

        expect(saveSpy).toHaveBeenCalledWith(user)

    })

    it('if user exist do not save user', () => {

        const myFakeUserRepository: UserRepository = {
            save: jest.fn(),
            userExist: () => true
        }
        
        const myUserService = new UserService(myFakeUserRepository)

        myUserService.save(user)

        expect(myFakeUserRepository.save).not.toHaveBeenCalled()      
        
    })


})