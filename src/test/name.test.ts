import { Name } from '../core/models/Name';

/*
 *  - if name was empty             ->  error response
 *  - if name have correct content  ->  return same string
*/

describe('name test', () => {

    it('name was empty return error response', () => {

        expect( () => Name.createNewName('') ).toThrow('Name cant be a empty string')

    })

    it('if name have a correct content return the same string', () => {

        const name: Name = Name.createNewName('Fernando')

        expect(name.getName()).toBe('Fernando')

    })

})
