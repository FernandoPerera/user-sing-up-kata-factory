import { FakeUserController } from '../core/controller/FakeUserController';
import { UserService } from '../core/service/UserService';
import { User } from '../core/models/User';
import { Email } from '../core/models/Email';
import { Name } from '../core/models/Name';
import { Age } from '../core/models/Age';

/**
 *  - if user is correct                ->      add into database
 *  - if user exist in the database     ->      dont add into database
*/

describe('sing-up user test', () => {

    let fakeUserController: FakeUserController
    let userService: UserService
    let saveSpy: jest.SpyInstance<void, [user: User], any>
    let userExistSpy: jest.SpyInstance<boolean, [user: User], any>
    let name: Name
    let age: Age
    let email: Email
    let user: User

    beforeEach( () => {
        fakeUserController = new FakeUserController()
        userService = new UserService(fakeUserController)
        saveSpy = jest.spyOn(userService, 'save')
        userExistSpy = jest.spyOn(userService, 'userExist')

        name = Name.createNewName('Fernando')
        age = Age.createNewAge(20)
        email = Email.createNewEmail('example@gmail.com')
        user = new User(name, age, email)
    })

    it('user is correct insert into the database', () => {

        userService.save(user)

        expect(saveSpy).toHaveBeenCalledWith(user)

    })

    it('if user exist in the database dont add', () => {

        userService.save(user)
        userService.save(user)

        expect(saveSpy).toHaveBeenNthCalledWith(2, user)       
        expect(userExistSpy).toHaveBeenNthCalledWith(2, user)
        expect(userExistSpy).toHaveLastReturnedWith(true)
        
    })

})