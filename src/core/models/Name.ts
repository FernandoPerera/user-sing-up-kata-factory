
export class Name {

    private name: string

    private constructor( name: string ){
        this.name = name
    }

    static createNewName( name: string ): Name {

        const nameIsNotEmpty = name !== ''

        if ( nameIsNotEmpty ) {
            return new Name(name)
        }

        throw new Error('Name cant be a empty string')

    }

}
