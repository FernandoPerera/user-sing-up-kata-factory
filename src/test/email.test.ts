import { Email } from '../core/models/Email';

/**
 *  - if email was empty                ->    error response
 *  - if email have a wrong format      ->    error response
 *  - if email was correct              ->    return same email
 */

describe('email test', () => {

    it('email was empty return error response', () => {

        expect( () => Email.createNewEmail('') ).toThrow('Email couldnt be empty')

    })

    it('email have a wrong format return error response', () => {

        expect( () => Email.createNewEmail('example.com') ).toThrow('Email have a wrong format')

    })

})
