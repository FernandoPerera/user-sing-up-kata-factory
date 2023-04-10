
export class Email {

    private email: string

    private constructor( email: string ) {
        this.email = email
    }

    static createNewEmail( email: string ): Email {

        const emailIsEmpty = !email
        const wrongEmailFormat = !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if ( emailIsEmpty ) { throw new Error( 'Email couldnt be empty' ) }
        if ( wrongEmailFormat ) { throw new Error( 'Email have a wrong format' ) }

        return new Email( email )

    }

    getEmail(): string {
        return this.email
    }

}
