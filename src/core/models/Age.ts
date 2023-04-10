
export class Age {

    private age: number

    private constructor(age: number) {
        this.age = age
    }

    static createNewAge(age: number): Age {

        if ( age > 0 && Number.isInteger(age)) {

            return new Age(age)            
        } else if ( !Number.isInteger(age) ) {
            
            throw new Error('Age have to be a whole number')    
        }

        throw new Error('Age have to be greater than zero')
    }

}
