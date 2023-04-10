import { Name } from '../core/models/Name';

/*
 *  - if name, email or age was empty  ->  error response
*/

describe('name test', () => {

    it('name was empty return error response', () => {

        const name: Name = new Name('')

        expect(name).toThrow('Name cant be a empty string')

    })

})
