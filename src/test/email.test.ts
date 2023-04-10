import { Email } from '../core/models/Email';

/**
 *  - if email was empty                ->    error response
 *  - if email have a wrong format      ->    error response
 *  - if email was correct              ->    return same email
 */

describe('email test', () => {

    it('email was empty return error response', () => {

        const email: string = ''
        const errorResponse = 'Email couldnt be empty'

        expect( () => Email.createNewEmail(email) ).toThrow(errorResponse)

    })

    it('email have a wrong format return error response', () => {

        const email: string = 'example.com'
        const errorResponse: string = 'Email have a wrong format'

        expect( () => Email.createNewEmail(email) ).toThrow(errorResponse)

    })

    it('email is correct return same email', () => {

        const email: Email = Email.createNewEmail('example@gmail.com')

        expect( email ).toBe('example@gmail.com')

    })

})
