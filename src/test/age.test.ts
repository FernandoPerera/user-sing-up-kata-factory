import { Age } from '../core/models/Age';

/**
 *  - if age was equals or less than zero      ->   error response
 *  - if age was a float                       ->   error response
 *  - if age was a negative number             ->   error response
 */

describe('age test', () => {

    it('if age was empty return error response', () => {

        expect( () => Age.createNewAge(0) ).toThrow('Age have to be greater than zero')

    })

})
