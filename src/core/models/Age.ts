
export class Age {

    private age: number

    private constructor(age: number) {
        this.age = age
    }

    static createNewAge(age: number): Age {

        if ( age > 0 ) {
            return new Age(age)            
        }

        throw new Error('Age have to be greater than zero')
    }

}
