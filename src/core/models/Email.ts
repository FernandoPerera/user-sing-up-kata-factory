
export class Email {

    private email: string

    private constructor( email: string ) {
        this.email = email
    }

    static createNewEmail( email: string ): Email {

        const EmailIsEmpty = !email

        if ( EmailIsEmpty ) { throw new Error( 'Email couldnt be empty' ) }

        return new Email( email )

    }

}
