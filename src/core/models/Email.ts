
export class Email {

    private email: string

    private constructor( email: string ) {
        this.email = email
    }

    static createNewEmail( email: string ): Email {

        if ( email !== '' ) {
            return new Email(email)
        }

        throw new Error('Email couldnt be empty')

    }

}
