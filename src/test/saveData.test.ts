import { FakeUserController } from '../core/controller/FakeUserController';
import { UserService } from '../core/service/UserService';
import { User } from '../core/models/User';
import { Email } from '../core/models/Email';
import { Name } from '../core/models/Name';
import { Age } from '../core/models/Age';

/**
 *  - if user is correct                ->      add into database
 *  - if user exist in the database    ->      dont add into database
*/

describe('sing-up user test', () => {

    let fakeUserController: FakeUserController
    let userService: UserService
    let spy: jest.SpyInstance<void, [user: User], any>

    beforeEach( () => {
        fakeUserController = new FakeUserController()
        userService = new UserService(fakeUserController)
        spy = jest.spyOn(userService, 'save')
    })

    it('user is correct insert into the database', () => {
        
        const name = Name.createNewName('Fernando')
        const age = Age.createNewAge(20)
        const email = Email.createNewEmail('example@gmail.com')
        const user = new User(name, age, email)

        userService.save(user)

        expect(spy).toHaveBeenCalledWith(user)

    })

    it('if user exist in the database dont add', () => {
        
        const name = Name.createNewName('Fernando')
        const age = Age.createNewAge(20)
        const email = Email.createNewEmail('example@gmail.com')
        const user = new User(name, age, email)

        userService.save(user)
        userService.save(user)

        expect(spy).toHaveBeenNthCalledWith(2, user)       
        expect(userService.userExist).toHaveBeenNthCalledWith(2, user)
        expect(userService.userExist).toHaveLastReturnedWith(true)
        
    })

})