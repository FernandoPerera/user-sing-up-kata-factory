import { Name } from '../core/models/Name';

/*
 *  - if name was empty  ->  error response
*/

describe('name test', () => {

    it('name was empty return error response', () => {

        expect( () => Name.createNewName('') ).toThrow('Name cant be a empty string')

    })

})
