
export class Email {

    private email: string

    private constructor( email: string ) {
        this.email = email
    }

    static createNewEmail( email: string ): Email {

        return new Email( email )

    }

}
