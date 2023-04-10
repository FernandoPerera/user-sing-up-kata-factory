import { Age } from '../core/models/Age';

/**
 *  - if age was equals or less than zero      ->   error response
 *  - if age was a float                       ->   error response
 *  - if age was correct                       ->   return the same age   
 */

describe('age test', () => {

    it('if age was empty return error response', () => {

        expect( () => Age.createNewAge(0) ).toThrow('Age have to be greater than zero')

    })

    it('if age was a float return error response', () => {

        expect( () => Age.createNewAge(17.89) ).toThrow('Age have to be a whole number')

    })

    it('if age was a correct number return same age', () => {

        const age: Age = Age.createNewAge(17)

        expect( age ).toBe(17)

    })

})
