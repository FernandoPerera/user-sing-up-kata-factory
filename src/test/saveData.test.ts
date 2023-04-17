
import { FakeUserRepository } from '../core/repository/FakeUserRepository'
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
    let fakeUserRepository: FakeUserRepository
    let userService: UserService

    let saveSpy: jest.SpyInstance<void, [user: User], any>
    let userExistSpy: jest.SpyInstance<boolean, [user: User], any>
    
    let name: Name
    let age: Age
    let email: Email
    let user: User

    beforeEach( () => {

        fakeUserRepository = new FakeUserRepository()
        userService = new UserService(fakeUserRepository)

        saveSpy = jest.spyOn(fakeUserRepository, 'save')
        userExistSpy = jest.spyOn(fakeUserRepository, 'userExist')

        name = Name.createNewName('Fernando')
        age = Age.createNewAge(20)
        email = Email.createNewEmail('example@gmail.com')
        user = new User(name, age, email)
        
    })

    it('if user is correct insert into the database', () => {

        userService.save(user)

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